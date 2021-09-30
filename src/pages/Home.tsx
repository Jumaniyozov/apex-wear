import HashTag from 'components/home/HashTag';
import Header from 'components/Header';
import React from 'react';
import styles from './home.scss';
import PictureCard from 'components/home/PictureCard';
import Modal from 'react-modal';
import Menu from 'components/home/Menu';

const customStyles = {
  content: {
    top: -20,
    left: -20,
    right: 'auto',
    bottom: 0,
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
};
const Home: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.home}>
      <Header openMenu={openModal} />
      <div className={styles.hashtags}>
        <HashTag isActive={true} />
        <HashTag isActive={false} />
        <HashTag isActive={false} />
        <HashTag isActive={false} />
        <HashTag isActive={false} />
        <HashTag isActive={false} />
        <HashTag isActive={false} />
        <HashTag isActive={false} />
      </div>
      <div className={styles.container}>
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default Home;
