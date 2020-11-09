import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLeague } from './highlightsSlice';
import style from './Nav.module.css';
import Logo from '../../assets/kick.svg';

const Nav = () => {
  const dispatch = useDispatch();
  const highlights = useSelector(state => state.highlights.highlights);
  const leagues = highlights.map(highlight => {
    const leagueName = highlight.competition.name.split(' ');
    if (leagueName[0] === 'CHAMPIONS' || leagueName[0] === 'EUROPA') {
      const newLeagueName = leagueName.slice(0, 1);
      return `${newLeagueName.join()} LEAGUE`;
    }
    return leagueName.join(' ');
  });
  const uniqueLeagues = Array.from(new Set(leagues));
  const leaguesOptions = uniqueLeagues.map(league => (
    <option key={league} value={league}>
      {league}
    </option>
  ));
  const handleChange = e => {
    const league = e.target.value;
    dispatch(setLeague(league));
  };
  return (
    <nav className="navbar navbar-light bg-light justify-content-between px-5 py-3">
      <a href="/" className="navbar-brand">
        <img className={style.logo} src={Logo} alt="" />
        SoccerHighlights
      </a>
      <div className="form-inline">
        <label htmlFor="selectLeague">
          Select league
          <select className="form-control ml-2" name="selectLeague" onChange={handleChange} data-testid="premiumFeatures">
            <option value="">All</option>
            {leaguesOptions}
          </select>
        </label>
      </div>
    </nav>
  );
};

export default Nav;
