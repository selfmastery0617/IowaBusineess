/**
 * Abstract, vendor-neutral infrastructure topology: access → network → compute → data,
 * with hybrid cloud, backup, and monitoring relationships. Pure SVG + CSS animation.
 */
const serverXs = [140, 250, 360];

function Server({ x, label, delay }: { x: number; label: string; delay: string }) {
  return (
    <g>
      <rect x={x} y={252} width={86} height={58} rx={7} fill="#16223a" stroke="#33456a" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x={x + 10} y={262 + r * 14} width={50} height={6} rx={2} fill="#22314f" />
          <circle
            cx={x + 72}
            cy={265 + r * 14}
            r={2.4}
            fill={r === 0 ? "#3b82f6" : "#60a5fa"}
            className="topo-blink"
            style={{ animationDelay: `calc(${delay} + ${r * 0.6}s)` }}
          />
        </g>
      ))}
      <text x={x + 43} y={328} textAnchor="middle" className="fill-slate-400 text-[10.5px] font-medium">
        {label}
      </text>
    </g>
  );
}

export function HeroGraphic() {
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-950 shadow-[0_30px_80px_-30px_rgb(11_18_32/0.55)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3">
          <span className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">Environment architecture</span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-brand-500" />
          </span>
        </div>

        <svg
          viewBox="0 0 560 450"
          className="relative block h-auto w-full"
          role="img"
          aria-labelledby="hero-graphic-title"
        >
          <title id="hero-graphic-title">
            Diagram of a layered infrastructure environment: access points connect through a network gateway to
            application and service tiers, backed by data storage, backup, monitoring, and a hybrid cloud connection.
          </title>

          {/* Tier dividers and labels */}
          <g stroke="#22314f" strokeDasharray="3 5">
            <line x1="20" y1="118" x2="540" y2="118" />
            <line x1="20" y1="222" x2="540" y2="222" />
            <line x1="20" y1="348" x2="540" y2="348" />
          </g>
          <g className="fill-slate-500 font-mono text-[9.5px] tracking-[0.18em]">
            <text x="24" y="40">ACCESS</text>
            <text x="24" y="142">NETWORK</text>
            <text x="24" y="246">COMPUTE</text>
            <text x="24" y="372">DATA</text>
          </g>

          {/* Connections: access → gateway */}
          <g fill="none" stroke="#3b82f6" strokeOpacity="0.7" strokeWidth="1.5" className="topo-flow">
            <path d="M175 72 C175 110 293 112 293 150" />
            <path d="M293 72 L293 150" />
            <path d="M411 72 C411 110 293 112 293 150" />
          </g>

          {/* gateway → compute */}
          <g fill="none" stroke="#3b82f6" strokeOpacity="0.7" strokeWidth="1.5" className="topo-flow">
            <path d="M293 192 C293 222 183 222 183 252" />
            <path d="M293 192 L293 252" />
            <path d="M293 192 C293 222 403 222 403 252" />
          </g>

          {/* compute → data */}
          <g fill="none" stroke="#60a5fa" strokeOpacity="0.55" strokeWidth="1.5" className="topo-flow">
            <path d="M183 310 C183 350 280 340 280 382" />
            <path d="M293 336 L293 380" />
            <path d="M403 310 C403 350 306 340 306 382" />
          </g>

          {/* hybrid cloud, backup, monitoring */}
          <g fill="none" stroke="#93b6fd" strokeOpacity="0.5" strokeWidth="1.25" className="topo-flow-slow">
            <path d="M446 281 L476 281" />
            <path d="M250 405 L204 405" />
            <path d="M336 405 L388 405" />
            <path d="M440 388 L440 312" />
          </g>

          {/* Access nodes */}
          {[
            { x: 175, label: "Office" },
            { x: 293, label: "Remote" },
            { x: 411, label: "Partners" },
          ].map((n, i) => (
            <g key={n.label}>
              <circle
                cx={n.x}
                cy={60}
                r={9}
                fill="none"
                stroke="#3b82f6"
                className="topo-pulse"
                style={{ animationDelay: `${i * 0.9}s` }}
              />
              <circle cx={n.x} cy={60} r={9} fill="#0f1a2e" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx={n.x} cy={60} r={3.2} fill="#60a5fa" />
              <text x={n.x} y={92} textAnchor="middle" className="fill-slate-400 text-[10.5px] font-medium">
                {n.label}
              </text>
            </g>
          ))}

          {/* Gateway */}
          <g>
            <rect x="208" y="150" width="170" height="42" rx="8" fill="#16223a" stroke="#3b82f6" strokeOpacity="0.8" />
            <circle cx="228" cy="171" r="3" fill="#3b82f6" />
            <text x="242" y="175" className="fill-slate-200 text-[12px] font-semibold">
              Gateway &amp; Network
            </text>
          </g>

          {/* Compute tier */}
          {serverXs.map((x, i) => (
            <Server key={x} x={x} label={["Applications", "Services", "Workloads"][i]} delay={`${i * 0.7}s`} />
          ))}

          {/* Hybrid cloud */}
          <g>
            <path
              d="M482 296 h44 a14 14 0 0 0 0 -28 a18 18 0 0 0 -32 -8 a13 13 0 0 0 -12 36 z"
              fill="#0f1a2e"
              stroke="#93b6fd"
              strokeOpacity="0.8"
              strokeDasharray="3 3"
            />
            <text x="505" y="328" textAnchor="middle" className="fill-slate-400 text-[10.5px] font-medium">
              Cloud
            </text>
          </g>

          {/* Data store */}
          <g>
            <path
              d="M250 388 v34 a43 9 0 0 0 86 0 v-34"
              fill="#16223a"
              stroke="#60a5fa"
              strokeOpacity="0.8"
            />
            <ellipse cx="293" cy="388" rx="43" ry="9" fill="#22314f" stroke="#60a5fa" strokeOpacity="0.8" />
            <path d="M250 404 a43 9 0 0 0 86 0" fill="none" stroke="#60a5fa" strokeOpacity="0.35" />
            <text x="293" y="445" textAnchor="middle" className="fill-slate-400 text-[10.5px] font-medium">
              Data
            </text>
          </g>

          {/* Backup */}
          <g>
            <rect x="122" y="388" width="82" height="34" rx="7" fill="#0f1a2e" stroke="#33456a" />
            <text x="163" y="409" textAnchor="middle" className="fill-slate-300 text-[11px] font-medium">
              Backup
            </text>
          </g>

          {/* Monitoring */}
          <g>
            <rect x="388" y="388" width="92" height="34" rx="7" fill="#0f1a2e" stroke="#33456a" />
            <polyline
              points="396,410 404,410 409,400 415,416 421,404 426,410 432,410"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1.4"
            />
            <text x="439" y="409" className="fill-slate-300 text-[10.5px] font-medium">
              Monitor
            </text>
          </g>
        </svg>
      </div>

      {/* Floating annotation cards */}
      <div
        className="absolute -bottom-12 -left-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-ink-950/10 sm:block lg:-left-8"
        aria-hidden="true"
      >
        <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">Designed for</p>
        <p className="mt-1 text-sm font-semibold text-ink-950">Reliability · Security · Scale</p>
      </div>
      <figcaption className="sr-only">
        An illustrative architecture diagram representing the kinds of environments IT Infrastructure Solutions
        assesses, designs, and improves.
      </figcaption>
    </figure>
  );
}
