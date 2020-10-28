import React, {useState, useEffect} from "react";
import axios from "axios";
import "../css/Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError(null);
        setProjects(null);
        setLoading(true);
        const response = await axios.get(
          "./data/data.json"
        );
        setProjects(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>불러올 수 없습니다. 에러가 발생했습니다.</p>;
  if (!projects) return null;
  
  return (
    <section className="project_list">
      <ul>
        {projects.map(project => (
          <li>
            <a href={project.link} target="_blank" rel="noopener noreferrer" title={project.title + " 새 창 열림"}>
              <img src={project.image} alt={project.title}/>
              <div className="project_txt">
                <h2>{project.title}</h2>
                <p>- {project.category}</p>
                <p>- {project.participation}</p>
                <p>- {project.description}</p>
              </div>
            </a>
          </li>
        ))}        
      </ul>
    </section>
  );
};

export default Projects;
