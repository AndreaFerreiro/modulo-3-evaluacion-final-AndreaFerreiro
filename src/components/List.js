import '../styles/List.scss';
import Element from './Element';
import { NavLink } from 'react-router-dom';
const List = ({ filterCharacters }) => {
  const htmlLi = filterCharacters.map((eachCharacter) => (
    <NavLink className="link" key={eachCharacter.id} to={"/element/"+eachCharacter.id}>
      <li key={eachCharacter.id} className="list-element">
        <Element eachCharacter={eachCharacter} />
      </li>
    </NavLink>
  ));
  return <ul className="list">{htmlLi}</ul>;
};
export default List;
