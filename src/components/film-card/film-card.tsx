import {Header} from '../header/header.tsx';
import {FilmInfo} from '../../mocs/filmInfo.ts';

import {ROUTES_LINKS} from '../../routes/consts.ts';
import {ICONS} from '../icon/icons.ts';
import {FilmCardLinkButton} from '../film-card-buttons/film-card-link-button.tsx';
import {Icon} from '../icon/icon.tsx';

interface FilmCardProps {
  film: FilmInfo;
}

const COUNT_FAVORITE = 9;

export function FilmCard({film}: FilmCardProps) {
  const {id, backgroundImage, genre, posterImage, name, released} = film;
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header classNames={'film-card__head'}/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <FilmCardLinkButton
                title={'Play'}
                classNames={'btn--play'}
                icon={<Icon {...ICONS.PLAY_START}/>}
                toLink={ROUTES_LINKS.PLAYER.replace(':id', id)}
              />
              <FilmCardLinkButton
                title={'My list'}
                classNames={'btn--list'}
                icon={<Icon {...ICONS.IN_LIST}/>}
                toLink={ROUTES_LINKS.MY_LIST}
              >
                <span className="film-card__count">{COUNT_FAVORITE}</span>
              </FilmCardLinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
