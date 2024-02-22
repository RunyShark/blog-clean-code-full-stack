interface SeedData {
  email: string;
  password: string;
  profile: Profile;
  blog: Blog;
}

interface Profile {
  firstName: string;
  lastName: string;
  photo: string;
}

interface Blog {
  author: string;
  title: string;
  content: string;
  imgUrl: string;
}

export const initData: SeedData[] = [
  {
    email: 'test@example.com',
    password: 'test',
    profile: {
      firstName: 'Diego',
      lastName: 'Ramírez',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973129/Byron_Robertson_av63id.jpg',
    },
    blog: {
      author: 'Diego Ramírez',
      title: 'Retos y Oportunidades de la IA en la Seguridad Cibernética',
      content: 'La Inteligencia Artificial...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708279014/pngtree-artificial-intelligence-robot-sci-fi-background-picture-image_2270827_c7sxjw.png',
    },
  },
  {
    email: 'user2@example.com',
    password: 'password2',
    profile: {
      firstName: 'Ana',
      lastName: 'Pérez',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973020/Harriet_Rojas_k9tu6x.jpg',
    },
    blog: {
      author: 'Ana Pérez',
      title: 'Innovación tecnológica en el siglo 21',
      content:
        'Explorando las últimas innovaciones tecnológicas y su impacto en la sociedad...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708279016/ai-art-astronaut-spacesuit-space-science-fiction-hd-wallpaper-preview_tcmsch.jpg',
    },
  },
  {
    email: 'user3@example.com',
    password: 'password3',
    profile: {
      firstName: 'Luis',
      lastName: 'González',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973016/Dillan_Nguyen_wosowv.jpg',
    },
    blog: {
      author: 'Luis González',
      title: 'El impacto del cambio climático',
      content:
        'Cómo el cambio climático está afectando al planeta y qué podemos hacer al respecto...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708279016/artwork-midjourney-ai-ai-generated-cyberpunk-neon-hd-wallpaper-preview_tmt6y4.jpg',
    },
  },
  {
    email: 'user4@example.com',
    password: 'password4',
    profile: {
      firstName: 'Marta',
      lastName: 'Rodríguez',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973017/Elisa_Nishikawa_bequh6.jpg',
    },
    blog: {
      author: 'Marta Rodríguez',
      title: 'Revolutionizing the Tech Industry',
      content:
        'The ways in which emerging technologies are reshaping industries...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708279014/synthwave-car-ai-162023_snozbk.png',
    },
  },
  {
    email: 'user5@example.com',
    password: 'password5',
    profile: {
      firstName: 'Jorge',
      lastName: 'López',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973015/Danyal_Lester_t5ayay.jpg',
    },
    blog: {
      author: 'Jorge López',
      title: 'La era de la información y sus desafíos',
      content:
        'Desafíos asociados con el manejo de la información y la privacidad en el mundo digital...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708279015/cyberpunk-sugar-skull-4k-3840x2160-by-a-i-v0-s3jiw28s7pna1_ovde5m.webp',
    },
  },
  {
    email: 'user6@example.com',
    password: 'password6',
    profile: {
      firstName: 'Sofía',
      lastName: 'Martínez',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973018/Erica_Wyatt_fblmhu.jpg',
    },
    blog: {
      author: 'Sofía Martínez',
      title: 'Sostenibilidad y desarrollo verde',
      content:
        'Estrategias para promover un desarrollo más sostenible y eco-amigable...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708279014/wp13334391_ww9rai.webp',
    },
  },
  {
    email: 'user7@example.com',
    password: 'password7',
    profile: {
      firstName: 'Carlos',
      lastName: 'Sánchez',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973015/Clifford_Jennings_kwxi0v.jpg',
    },
    blog: {
      author: 'Carlos Sánchez',
      title: 'El futuro de la inteligencia artificial',
      content:
        'Exploración de las posibilidades y desafíos que presenta la IA para el futuro...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708290522/mi4knzjwvyxxkkdbxr1t.gif',
    },
  },
  {
    email: 'user8@example.com',
    password: 'password8',
    profile: {
      firstName: 'Patricia',
      lastName: 'Ramírez',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973015/Clifford_Jennings_kwxi0v.jpg',
    },
    blog: {
      author: 'Patricia Ramírez',
      title: 'Ciberseguridad en la era digital',
      content:
        'Importancia de la ciberseguridad para proteger la información en línea...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1708290522/mi4knzjwvyxxkkdbxr1t.gif',
    },
  },
  {
    email: 'user9@example.com',
    password: 'password9',
    profile: {
      firstName: 'Roberto',
      lastName: 'Torres',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973021/Harry_Bender_m3kdwh.jpg',
    },
    blog: {
      author: 'Roberto Torres',
      title: 'Avances en la medicina moderna',
      content: 'Últimos avances en tratamientos y tecnologías médicas...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1707709240/3WFM_iahmch.gif',
    },
  },
  {
    email: 'user10@example.com',
    password: 'password10',
    profile: {
      firstName: 'Elena',
      lastName: 'Navarro',
      photo:
        'https://res.cloudinary.com/runyshark1/image/upload/v1706973019/Florence_Shaw_nkrvqu.jpg',
    },
    blog: {
      author: 'Elena Navarro',
      title: 'Educación virtual: retos y oportunidades',
      content: 'Los beneficios y desafíos de la educación en línea...',
      imgUrl:
        'https://res.cloudinary.com/runyshark1/image/upload/v1707709938/1YFx_jq9ejr.gif',
    },
  },
];
