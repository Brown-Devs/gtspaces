import type { PlotOption } from "@/data/projects";

export function FloorPlans({ plans }: { plans: PlotOption[] }) {
  return (
    <div className="space-y-6">
      {plans.map((plan) => (
        <div key={plan.label} className="card-premium overflow-hidden p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7">
          <div>
            <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
              {plan.availability}
            </span>
            <h3 className="mt-3 font-serif text-lg font-semibold text-ink-900">{plan.label}</h3>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-ink-400">Unit Type</p>
                <p className="mt-1 font-semibold text-ink-800">{plan.unitType}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-ink-400">Configuration</p>
                <p className="mt-1 font-semibold text-ink-800">{plan.areaGaj}</p>
              </div>
              {plan.dimensions && (
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-ink-400">Includes</p>
                  <p className="mt-1 font-semibold text-ink-800">{plan.dimensions}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 shrink-0 sm:mt-0 sm:text-right">
            <p className="text-[11px] uppercase tracking-wide text-ink-400">Price</p>
            <p className="mt-1 font-serif text-2xl font-semibold text-ink-900">{plan.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
