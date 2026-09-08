export const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    // Fullscreen quad trick: geometry is already in [-1, 1] clip space,
    // so we skip the model-view-projection chain entirely.
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform vec3 uColorBase;
  uniform vec3 uColorMantle;
  uniform vec3 uColorCrust;
  uniform vec3 uColorBlue;
  uniform vec3 uColorMauve;

  varying vec2 vUv;

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float valueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * valueNoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
    vec2 mouseInfluence = (uMouse - 0.5) * vec2(aspect, 1.0) * 0.15;

    // Domain warp: sample a noise field, then use it to offset the
    // coordinates fed into the final noise sample for an organic flow.
    vec2 warpInput = p * 1.6 + uTime * 0.03;
    vec2 warp = vec2(fbm(warpInput), fbm(warpInput + 5.2)) * 0.6;

    float n = fbm(p * 1.4 + warp + mouseInfluence + uTime * 0.015);
    n = n * 0.5 + 0.5;

    vec3 color = mix(uColorCrust, uColorMantle, smoothstep(0.0, 0.5, n));
    color = mix(color, uColorBase, smoothstep(0.35, 0.7, n));
    color = mix(color, uColorBlue, smoothstep(0.55, 0.85, n) * 0.35);
    color = mix(color, uColorMauve, smoothstep(0.7, 1.0, n) * 0.28);

    float vignette = smoothstep(1.1, 0.2, length(p));
    color *= mix(0.7, 1.0, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`;
