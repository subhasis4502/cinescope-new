import { FiCalendar, FiHeart, FiUsers } from 'react-icons/fi'

const StatsBand = () => {
  const stats = [
    [FiHeart, '250+', 'Weddings Captured'],
    [FiUsers, '25+', 'Destinations'],
    [FiCalendar, '7+', 'Years Of Experience'],
    [FiHeart, '100%', 'Heart In Every Story'],
  ]

  return (
    <section className="stats-band">
      {stats.map(([Icon, number, label]) => (
        <article key={label}>
          <Icon />
          <strong>{number}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  )
}

export default StatsBand
