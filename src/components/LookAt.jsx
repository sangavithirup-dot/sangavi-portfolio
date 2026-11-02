
const BASE = import.meta.env.BASE_URL

export default function LookAt({ className = "", label = "Sangavi T" }) {
  return (
    <img
      src={`${BASE}img/photos/sangavi1.jpg`}
      className={className}
      alt={label}
    />
  )
}
