import aboutImg from "../assets/images/about_img.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Utkarsh Khandelwal</h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://github.com/LughTuahDe"
              target="_blank"
            >
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="www.linkedin.com/in/urk2003"
              target="_blank"
            >
              LinkedIn <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>

          Utkarsh Rajesh Khandelwal is an aspiring technology professional and current Master of Computer Applications (MCA) student at Veermata Jijabai Technological Institute (VJTI), Mumbai. With a focus on versatility, he seeks to bridge the gap between technical innovation and practical solutions. Utkarsh's academic background and hands-on experience in fields like web development, database management, and app integration reflect his deep commitment to staying ahead in the rapidly evolving tech landscape.

          An avid learner and problem solver, Utkarsh is actively working on a variety of projects, including a web technology lab assignment, a travel tourism app, and a personal survey website. He is particularly passionate about user-centric design, ensuring seamless frontend experiences, and building scalable, efficient backend systems. Whether it's integrating new features into a MERN stack app or optimizing user interfaces for maximum engagement, Utkarsh approaches each project with creativity and precision.

          When he's not immersed in coding or tackling complex technical challenges, Utkarsh enjoys exploring new ideas and staying updated with the latest trends in technology. His drive for excellence and continuous improvement makes him an invaluable part of any project team.


        </p>
      </div>
    </div>
  );
};

export default About;
