import React, { useRef, useState } from 'react';
import './styles.scss';

import { Hero } from 'src/features/heroes/heroes.types';

import CardScope from 'src/components/molecules/CardScope';
import LoadState from 'src/components/atoms/LoadState';
import SearchBar from 'src/components/molecules/SearchBar';
import Modal from 'src/components/atoms/Modal';
import ModalContent from 'src/components/atoms/ModalContent';
import DetailsScope from 'src/components/organisms/DetailsScope';

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
        <button onClick={() => handleNav('left')} className='list-controller'>
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <div className='grid' ref={ref}>
          {heroes?.map((hero) => (
            <CardScope
              hero={hero}
              key={hero.id}
              getHero={(selected) => openModal(selected)}
            />
          ))}
        </div>
        <button onClick={() => handleNav('right')} className='list-controller'>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </>
  );
};

export default List;
