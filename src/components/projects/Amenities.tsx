import { CheckCircle2 } from "lucide-react";
import type { FeatureGroup } from "@/data/projects";
import { StaggerItem, Stagger } from "@/components/ui/AnimatedSection";

export function Amenities({ groups }: { groups: FeatureGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category} className="card-premium p-8">
          <h3 className="font-serif text-lg font-semibold text-ink-900">{group.category}</h3>
          <Stagger className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-500" />
                  <span>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ))}
    </div>
  );
}
