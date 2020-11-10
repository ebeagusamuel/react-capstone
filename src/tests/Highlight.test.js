import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import Highlight from '../feature/soccerHighlights/Highlight';
import store from '../store';

const highlight = {
  "title": "CA Central Cordoba - Defensa y Justicia",
  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https://www.scorebat.com/embed/g/1001829/?s=2' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe></div>",
  "url": "https://www.scorebat.com/ca-central-cordoba-vs-defensa-y-justicia-live-stream/",
  "thumbnail": "https://www.scorebat.com/og/m/og1001829.jpeg",
  "date": "2020-11-10T00:30:00+0000",
  "side1": {
      "name": "CA Central Cordoba",
      "url": "https://www.scorebat.com/live-stream/ca-central-cordoba/"
  },
  "side2": {
      "name": "Defensa y Justicia",
      "url": "https://www.scorebat.com/live-stream/defensa-y-justicia/"
  },
  "competition": {
      "name": "ARGENTINA: Superliga",
      "id": 920,
      "url": "https://www.scorebat.com/argentina-superliga-live-scores/"
  },
  "videos": [
      {
          "title": "Highlights",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/5faa01add5755/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
      }
  ]
}

test('it renders the Highlight component correctly', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Provider store={store}>
      <Router history={history}>
        <Highlight highlight={highlight}/>
      </Router>
    </Provider>
  )

  expect(screen.getByText('CA Central Cordoba - Defensa y Justicia')).toBeInTheDocument();
  expect(screen.getByText('Watch highlight')).toBeInTheDocument(); 
});
