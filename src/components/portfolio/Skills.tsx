import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/cn';
import type { SkillLevel } from '@/types/portfolio';

/** Quantas barras acendem em cada nível. */
const LEVEL_STEPS: Record<SkillLevel, number> = {
  basic: 1,
  intermediate: 2,
  advanced: 3,
};

export function Skills() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const groups = site[lang].skills;

  return (
    <section id="competencias" className="scroll-mt-24 border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <p className="text-eyebrow font-medium text-ink-faint uppercase">{t.skillsTitle}</p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">{t.skillsIntro}</p>
        </Reveal>

        <div className="mt-14 space-y-12 md:mt-20 md:space-y-16">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={Math.min(groupIndex, 4) * 60}>
              <div className="grid gap-6 md:grid-cols-12 md:gap-16">
                <h3 className="font-display text-title md:col-span-4">{group.title}</h3>

                <ul className="md:col-span-8">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-6 border-b border-line py-3 last:border-b-0"
                    >
                      <span className="text-sm md:text-base">{skill.name}</span>

                      <span className="flex shrink-0 items-center gap-3">
                        <span className="hidden text-xs text-ink-faint sm:inline">
                          {t.levels[skill.level]}
                        </span>
                        <span
                          className="flex items-center gap-1"
                          role="img"
                          aria-label={t.levels[skill.level]}
                        >
                          {[0, 1, 2].map((step) => (
                            <span
                              key={step}
                              className={cn(
                                'h-1 w-5 rounded-full transition-colors duration-300',
                                step < LEVEL_STEPS[skill.level] ? 'bg-accent' : 'bg-line',
                              )}
                            />
                          ))}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
