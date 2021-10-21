import React, { useRef, useState } from 'react';
import './styles.scss';

import { Hero } from 'src/features/heroes/heroes.types';

import CardScope from 'src/molecules/CardScope';
import LoadState from 'src/atoms/LoadState';
import SearchBar from 'src/molecules/SearchBar';
import Modal from 'src/atoms/Modal';
import ModalContent from 'src/atoms/ModalContent';
import DetailsScope from 'src/organisms/DetailsScope';

interface IProps {
  heroes?: Hero[];
}

const List = ({ heroes }: IProps) => {
  const ref: any = React.createRef();
  const [showModal, setShowModal] = useState(false);
  const [heroSelected, setHeroSelected] = useState<Hero>();

  const handleNav = (direction: string) => {
    if (direction === 'left') {
      ref ? (ref.current.scrollLeft -= 200) : null;
    } else {
      ref ? (ref.current.scrollLeft += 200) : null;
    }
  };

  if (heroes?.length == 0) {
    return (
      <div className='load-state'>
        <LoadState />
        <h2>Walking through multiverses...</h2>
      </div>
    );
  }

  document.onkeydown = function (evt: any) {
    evt = evt || window.event;
    var isEscape = false;
    if ('key' in evt) {
      isEscape = evt.key === 'Escape' || evt.key === 'Esc';
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      setShowModal(false);
    }
  };

  function openModal(hero: Hero) {
    setHeroSelected(hero);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <Modal isOpen={showModal}>
          <ModalContent>
            {/* <button onClick={() => setShowModal(false)}>
              <h1 style={{ color: '#FFF' }}>Close (ESC)</h1>
            </button> */}
            <CardScope hero={heroSelected} showDetails={false} />
            <DetailsScope hero={heroSelected} />
          </ModalContent>
        </Modal>
      )}
      <SearchBar />
      <div style={{ paddingLeft: 60 }}>
        <p>
          {heroes?.length >= 0
            ? heroes.length + ' record(s) found.'
            : 'No record(s) found.'}
        </p>
      </div>
      <div className='container'>
        <div className='grid'>
          {heroes?.map((hero) => (
            <CardScope
              hero={hero}
              key={hero.id}
              getHero={(selected) => openModal(selected)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
