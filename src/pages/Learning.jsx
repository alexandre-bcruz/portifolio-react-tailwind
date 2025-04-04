export function Learning() {
    const learning = ['TypeScript', 'Ruby', 'Kubernetes']
    return (
      <section id="learning" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Evolving...</h2>
        <ul className="list-disc pl-5 space-y-2">
          {learning.map(topic => (
            <li key={topic} className="text-lg">{topic}</li>
          ))}
        </ul>
      </section>
    )
  }