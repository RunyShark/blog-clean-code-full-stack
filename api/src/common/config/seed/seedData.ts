interface SeedData {
  email: string;
  password: string;
  profile: Profile;
  blog: Blog;
}

interface Profile {
  firstName: string;
  lastName: string;
}

interface Blog {
  author: string;
  title: string;
  content: string;
}

export const initData: SeedData[] = [
  {
    email: 'test@example.com',
    password: 'test',
    profile: {
      firstName: 'Diego',
      lastName: 'Ramírez',
    },
    blog: {
      author: 'Diego Ramírez',
      title: 'Retos y Oportunidades de la IA en la Seguridad Cibernética',
      content: 'La Inteligencia Artificial...',
    },
  },
  {
    email: 'user2@example.com',
    password: 'password2',
    profile: {
      firstName: 'Ana',
      lastName: 'Pérez',
    },
    blog: {
      author: 'Ana Pérez',
      title: 'Innovación tecnológica en el siglo 21',
      content:
        'Explorando las últimas innovaciones tecnológicas y su impacto en la sociedad...',
    },
  },
  {
    email: 'user3@example.com',
    password: 'password3',
    profile: {
      firstName: 'Luis',
      lastName: 'González',
    },
    blog: {
      author: 'Luis González',
      title: 'El impacto del cambio climático',
      content:
        'Cómo el cambio climático está afectando al planeta y qué podemos hacer al respecto...',
    },
  },
  {
    email: 'user4@example.com',
    password: 'password4',
    profile: {
      firstName: 'Marta',
      lastName: 'Rodríguez',
    },
    blog: {
      author: 'Marta Rodríguez',
      title: 'Revolutionizing the Tech Industry',
      content:
        'The ways in which emerging technologies are reshaping industries...',
    },
  },
  {
    email: 'user5@example.com',
    password: 'password5',
    profile: {
      firstName: 'Jorge',
      lastName: 'López',
    },
    blog: {
      author: 'Jorge López',
      title: 'La era de la información y sus desafíos',
      content:
        'Desafíos asociados con el manejo de la información y la privacidad en el mundo digital...',
    },
  },
  {
    email: 'user6@example.com',
    password: 'password6',
    profile: {
      firstName: 'Sofía',
      lastName: 'Martínez',
    },
    blog: {
      author: 'Sofía Martínez',
      title: 'Sostenibilidad y desarrollo verde',
      content:
        'Estrategias para promover un desarrollo más sostenible y eco-amigable...',
    },
  },
  {
    email: 'user7@example.com',
    password: 'password7',
    profile: {
      firstName: 'Carlos',
      lastName: 'Sánchez',
    },
    blog: {
      author: 'Carlos Sánchez',
      title: 'El futuro de la inteligencia artificial',
      content:
        'Exploración de las posibilidades y desafíos que presenta la IA para el futuro...',
    },
  },
  {
    email: 'user8@example.com',
    password: 'password8',
    profile: {
      firstName: 'Patricia',
      lastName: 'Ramírez',
    },
    blog: {
      author: 'Patricia Ramírez',
      title: 'Ciberseguridad en la era digital',
      content:
        'Importancia de la ciberseguridad para proteger la información en línea...',
    },
  },
  {
    email: 'user9@example.com',
    password: 'password9',
    profile: {
      firstName: 'Roberto',
      lastName: 'Torres',
    },
    blog: {
      author: 'Roberto Torres',
      title: 'Avances en la medicina moderna',
      content: 'Últimos avances en tratamientos y tecnologías médicas...',
    },
  },
  {
    email: 'user10@example.com',
    password: 'password10',
    profile: {
      firstName: 'Elena',
      lastName: 'Navarro',
    },
    blog: {
      author: 'Elena Navarro',
      title: 'Educación virtual: retos y oportunidades',
      content: 'Los beneficios y desafíos de la educación en línea...',
    },
  },
];
