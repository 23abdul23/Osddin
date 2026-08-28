type TeamMember = {
  name: string;
  role?: string;
  title: string;
  email: string;
  link?: string;
  image: string;
};

type TeamCategory = {
  heading: string;
  members: TeamMember[];
};

export const team: TeamCategory[] = [
  {
    heading: 'Principal Investigator',
    members: [
          {
        name: 'Prof. Samir K Brahmachari',
        title: `Academy Professor AcSIR,
Chief Mentor OSDD
Founding Director CSIR-IGIB and
Former Director General CSIR, India.`,
        email: 'skb@igib.in',
        link: 'https://www.samirbrahmachari.com/',
        image: '/image/team/samirbrahmachari.jpg',
      },
    ],
  },
  {
    heading: 'Co-Investigators',
    members: [
      {
        name: 'Prof. Dong Xu',
        title: `Department of Electrical Engineering and Computer Science
        University of Missouri, Columbia`,
        email: 'xudong@missouri.edu',
        link: 'https://engineering.missouri.edu/faculty/dong-xu/',
        image: '/image/team/dongxu.jpg',
      },
      {
        name: 'Dr. Muneendra Ojha',
        title: `Department of Information Technology
        Indian Institute of Information Technology, Allahabad`,
        email: 'muneendra@iiita.ac.in',
        link: 'https://www.linkedin.com/in/muneendra-ojha-a3153b15/',
        image: '/image/team/muneendraojha.jpg',
      },
    ],
  },
  {
    heading: 'TBEP v2 Development Team',
    members: [
      {
        name: 'Shivansh Gupta',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'guptashivansh374@gmail.com',
        link: 'https://www.linkedin.com/in/sh1vanshgupta',
        image: '/image/team/shivanshgupta.jpeg',
      },
      {
        name: 'Urvija Roy Chowdhury',
        title: `Data Analytics & AI
             Validasen Inc., California`,
        email: 'roychowdhury.urvija@gmail.com',
        link: 'https://www.linkedin.com/in/urvija-roy-chowdhury-a7844426/',
        image: '/image/team/urvija.png',
      },
      {
        name: 'Abdul Azeem Ansari',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: '23abdulazeem23@gmail.com',
        link: 'https://www.linkedin.com/in/abdulazeemansari',
        image: '/image/team/abdulazeem.jpg',
      },
      {
        name: 'Mishti garg',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'gargmishti9@gmail.com',
        link: 'https://www.linkedin.com/in/mishti-garg-41aa2931b/',
        image: '/image/team/mishtigarg.jpeg',
      },
      {
        name: 'Kyan Mahajan',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'kyanmahajan676@gmail.com',
        link: 'https://www.linkedin.com/in/kyan-mahajan-99a195315',
        image: '/image/team/kyanmahajan.jpeg',
      },
      {
        name: 'Sankalp Joshi',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'sankalppjoshi30@gmail.com',
        link: 'https://www.linkedin.com/in/sankalp-joshi-iiita/',
        image: '/image/team/sankalpjoshi.jpeg',
      },
    ],
  },
  {
    heading: 'TBEP Development Team',
    members: [
      {
        name: 'Bhupesh Dewangan',
        title: `Artificial Intelligence and Multiagent Systems Lab
        Indian Institute of Information Technology, Allahabad`,
        email: 'bhupesh.it.iiita@gmail.com',
        link: 'https://www.linkedin.com/in/bhupesh-dewangan/',
        image: '/image/team/bhupeshdewangan.jpg',
      },
      {
        name: 'Debjyoti Ray',
        title: `Artificial Intelligence and Multiagent Systems Lab
        Indian Institute of Information Technology, Allahabad`,
        email: 'iec2022111@iiita.ac.in',
        link: 'https://www.linkedin.com/in/debjyotiray5811/',
        image: '/image/team/debjyotiray.jpg',
      },
      {
        name: 'Shraddha Srivastava',
        title: `Artificial Intelligence and Multiagent Systems Lab
        Indian Institute of Information Technology, Allahabad`,
        email: 'shraddhasrivas14@gmail.com',
        link: 'https://www.linkedin.com/in/shraddha-srivastava-898024212/',
        image: '/image/team/shraddhasrivastava.jpg',
      },
      {
        name: 'Yijie Ren',
        title: `Digital Biology Lab
        University of Missouri, Columbia`,
        email: 'yry7d@mail.missouri.edu',
        link: 'https://www.linkedin.com/in/yijie-ren-851a61141/',
        image: '/image/team/yijieren.jpg',
      },
      {
        name: 'Lei Jiang',
        title: `Digital Biology Lab
        University of Missouri, Columbia`,
        email: 'leijiang@missouri.edu',
        image: '/image/team/leijiang.jpg',
      },
    ],
  },
];


export const teamOsddin: TeamCategory[] = [
  {
    heading: 'Chief Mentor',
    members: [
      {
        name: 'Prof. Samir K Brahmachari',
        title: `Academy Professor AcSIR,
Chief Mentor OSDD
Founding Director CSIR-IGIB and
Former Director General CSIR, India.`,
        email: 'skb@igib.in',
        link: 'https://www.samirbrahmachari.com/',
        image: '/image/team/samirbrahmachari.jpeg',
      },
    ],
  },
  {
    heading: 'Principal Investigators',
    members: [
      {
        name: 'Dr. Gyan P. Srivastava',
        title: `Department of Electrical Engineering and Computer Science
        University of Missouri, Columbia`,
        email: 'gps8b9@missouri.edu',
        link: 'https://engineering.missouri.edu/faculty/gyan-srivastava/',
        image: '/image/team/gpsrivastava.jpg',
      },
      {
        name: 'Ashwin Jainarayanan',
        title: `Molecular Immunologist
        Founder, Granza Bio (YC W24)`,
        email: 'ashj@granzabio.com',
        link: 'https://www.linkedin.com/in/jainarayananak/',
        image: '/image/team/ashwin.jpg',
      },
    ],
  },
  {
    heading: 'Co-Investigator',
    members: [

      {
        name: 'Dr. Muneendra Ojha',
        title: `Associate Professor 
         Department of Information Technology
         IIIT Allahabad`,
        email: 'muneendra@iiita.ac.in',
        link: 'https://aims.iiita.ac.in/',
        image: '/image/team/muneendraojha.jpg',
      },
    ],
  },
 {
    heading: 'Scientific Advisors',
    members: [
      {
        name: ' Prof. Gajendra P. S. Raghava',
        role: 'Technical Advisor',
        title: `Head of the Department of Computational Biology
              Institute of Information Technology (IIIT), Delhi`,
        email: 'raghava@iiitd.ac.in',
        link: 'https://webs.iiitd.edu.in/raghava/',
        image: '/image/team/gajendraraghava.png',
      },
      {
        name: 'Dr. S. Ramachandran',
        role: 'Diabetes Advisor',
        title: `Former Chief Scientist and Professor, AcSIR
         Faculty of Biological Sciences, CSIR-IGIB`,
        email: 'ramu@igib.in',
        link: 'https://www.linkedin.com/in/srinivasan-ramachandran-08385767/',
        image: '/image/team/sramchandran.jpeg',
      },
         {
        name: 'Prof. Vijay Tiwari',
         role: 'Oncology Advisor',
        title: `Professor and Head of Research
        Institute of Molecular Medicine, SDU, Odense, Denmark`,
        email: 'Tiwari@health.sdu.dk',
        link: 'https://tiwarilab.org/',
        image: '/image/team/vijaytiwari.png',
      },
      {
        name: 'Dr. Debasis Dash',
        role: 'Prospective Advisor',
        title: `Director
        Institute of Life Sciences, Bhubaneswar`,
        email: 'director@ils.res.in',
        link: 'https://www.ils.res.in/scientists/debasis-dash/',
        image: '/image/team/debasisdas.jpeg',
      },
    ],
  },
  {
    heading: 'OSDDIN Development Team',
    members: [
      {
        name: 'Shivansh Gupta',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'guptashivansh374@gmail.com',
        link: 'https://www.linkedin.com/in/sh1vanshgupta',
        image: '/image/team/shivanshgupta.jpeg',
      },
      {
        name: 'Urvija Roy Chowdhury',
        title: `Data Analytics & AI
             Validasen Inc., California`,
        email: 'roychowdhury.urvija@gmail.com',
        link: 'https://www.linkedin.com/in/urvija-roy-chowdhury-a7844426/',
        image: '/image/team/urvija.png',
      },
      {
        name: 'Abdul Azeem Ansari',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: '23abdulazeem23@gmail.com',
        link: 'https://www.linkedin.com/in/abdulazeemansari',
        image: '/image/team/abdulazeem.jpg',
      },
      {
        name: 'Mishti garg',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'gargmishti9@gmail.com',
        link: 'https://www.linkedin.com/in/mishti-garg-41aa2931b/',
        image: '/image/team/mishtigarg.jpeg',
      },
      {
        name: 'Kyan Mahajan',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'kyanmahajan676@gmail.com',
        link: 'https://www.linkedin.com/in/kyan-mahajan-99a195315',
        image: '/image/team/kyanmahajan.jpeg',
      },
      {
        name: 'Sankalp Joshi',
        title: `Indian Institute of Information Technology, Allahabad`,
        email: 'sankalppjoshi30@gmail.com',
        link: 'https://www.linkedin.com/in/sankalp-joshi-iiita/',
        image: '/image/team/sankalpjoshi.jpeg',
      },
    ],
  },
  {
    heading: 'TBEP Development Team',
    members: [
      {
        name: 'Bhupesh Dewangan',
        title: `Artificial Intelligence and Multiagent Systems Lab
        Indian Institute of Information Technology, Allahabad`,
        email: 'bhupesh.it.iiita@gmail.com',
        link: 'https://www.linkedin.com/in/bhupesh-dewangan/',
        image: '/image/team/bhupeshdewangan.jpg',
      },
      {
        name: 'Debjyoti Ray',
        title: `Artificial Intelligence and Multiagent Systems Lab
        Indian Institute of Information Technology, Allahabad`,
        email: 'iec2022111@iiita.ac.in',
        link: 'https://www.linkedin.com/in/debjyotiray5811/',
        image: '/image/team/debjyotiray.jpg',
      },
      {
        name: 'Shraddha Srivastava',
        title: `Artificial Intelligence and Multiagent Systems Lab
        Indian Institute of Information Technology, Allahabad`,
        email: '	shraddhasrivas14@gmail.com',
        link: 'https://www.linkedin.com/in/shraddha-srivastava-898024212/',
        image: '/image/team/shraddhasrivastava.jpg',
      },
      {
        name: 'Yijie Ren',
        title: `Digital Biology Lab
        University of Missouri, Columbia`,
        email: 'yry7d@mail.missouri.edu',
        link: 'https://www.linkedin.com/in/yijie-ren-851a61141/',
        image: '/image/team/yijieren.jpg',
      },
      {
        name: 'Lei Jiang',
        title: `Digital Biology Lab
        University of Missouri, Columbia`,
        email: 'leijiang@missouri.edu',
        image: '/image/team/leijiang.jpg',
      },
    ],
  },
];