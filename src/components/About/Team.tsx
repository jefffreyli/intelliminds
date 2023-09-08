const people = [
  {
    name: "Adam Sultan",
    role: "Vice President",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Adam is a freshman at Carnegie Mellon University, Majoring in Data Science",
  },
  {
    name: "Samen Hossain",
    role: "Co-Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Samen is a freshman at University of Pennsylvania, Majoring in math and computer science",
  },
  {
    name: "Benjamin Chong",
    role: "Co-Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Benjamin, is a 18 year old incoming freshman at Cornell. He is majoring in Pre-Med. He likes to spend time playing basketball, watching movies, and working out",
  },
  {
    name: "Ravnoor Bedi",
    role: "Co-Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ravnoor, is a 18 year old incoming freshman at Cornell. He is majoring in computer science, with a focus in AI and maybe math. He likes to spend time playing basketball, watching movies, and working out.",
  },
  {
    name: "Jeffrey Li",
    role: "Lead Web Developer ",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Jeffrey is a freshman at Massachussets Institute of Technology, majoring in computer science and AI",
  },
  {
    name: "Shad Talha",
    role: "Marketing Advisor",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Shad is a freshman at NYU, majoring in computer science and gender studies",
  },
  {
    name: "Chowdhury Raza",
    role: "Financial Advisor",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map(person => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-orange-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
