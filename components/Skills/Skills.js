import { Code2, Smartphone, Database, Wrench, Layout } from 'lucide-react'
import { skillCategories } from '../../lib/portfolio'
import './Skills.css'

const iconMap = {
  code: Code2,
  smartphone: Smartphone,
  database: Database,
  tool: Wrench,
  layout: Layout,
}

const Skills = () => {
  if (!skillCategories.length) return null

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__grid">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] || Code2

          return (
            <div key={category.name} className="skills__category">
              <div className="skills__category-header">
                <span className="skills__category-icon">
                  <Icon size={18} />
                </span>
                <h3 className="skills__category-name">{category.name}</h3>
              </div>

              <ul className="skills__pills">
                {category.skills.map((skill) => (
                  <li key={skill} className="skills__pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills