import HashTag from 'components/home/HashTag';
import Header from 'components/Header';
import React, { useEffect } from 'react';
import styles from './home.scss';
import PictureCard from 'components/home/PictureCard';
import Modal from 'react-modal';
import Menu from 'components/home/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../features/categories/categoriesSlice';

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
  const dispatch = useDispatch();
  const userToken = sessionStorage.getItem('userToken');
  const categories = useSelector((state) => state.categories.categories);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch(fetchCategories({ userToken }));
  }, [dispatch, userToken]);

  return (
    <div className={styles.home}>
      <Header openMenu={openModal} />
      <div className={styles.hashtags}>
        {categories.map((category, index) => (
          <HashTag
            key={category.uid}
            category={category.name}
            isActive={index === 0 ? true : false}
          />
        ))}
      </div>
      <div className={styles.container}>
        <PictureCard incrementer={1} />
        <PictureCard incrementer={2} />
        <PictureCard incrementer={3} />
        <PictureCard incrementer={4} />
        <PictureCard incrementer={5} />
        <PictureCard incrementer={6} />
        <PictureCard incrementer={7} />
        <PictureCard incrementer={8} />
        <PictureCard incrementer={9} />
        <PictureCard incrementer={10} />
        <PictureCard incrementer={11} />
        <PictureCard incrementer={12} />
        <PictureCard incrementer={13} />
        <PictureCard incrementer={14} />
        <PictureCard incrementer={15} />
        <PictureCard incrementer={16} />
        <PictureCard incrementer={17} />
        <PictureCard incrementer={18} />
        <PictureCard incrementer={19} />
        <PictureCard incrementer={20} />
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
