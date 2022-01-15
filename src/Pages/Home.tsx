/**
 * @file
 * Contain Home page
 */
import { AppWrapper } from '../defaultStyled';
import LogoPng from '../Assets/logo.png'
import { CatImg, CatsWrapper, CatWrapper, Header, LoadMore, Logo, Nav, NavItem } from './styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatByCategores, setCategores } from '../Store/Actions/CatActions';
import { getCatStore } from '../Store/Selectors/CatStoreSelector';
import { useState } from 'react';

const Home = () => {
  const Dispatch = useDispatch();
  const { categores, data } = useSelector(getCatStore);
  const [prevCategory, setPrevCategore] = useState(-1);
  const [page, setPage] = useState(1);

  /**
   * get and set categores.
   */
  useEffect(() => {
    Dispatch(setCategores())
  }, []);

  /**
   * Get By Categores.
   * @param { object } category.
   */
  const handleSelectCategory = (category: number) => () => {
    Dispatch(setCatByCategores(page, category, category === prevCategory))
    setPrevCategore(category);
  };

  /**
   * Load more handler.
   */
  const handleLoadMore = () => {
    Dispatch(setCatByCategores(page + 1, prevCategory, true))
    setPage(prev => prev++)
  }

  return (
    <AppWrapper>
      <Header>
        <Logo src={LogoPng} alt="logo" />
        <Nav>
          {categores.map((category: any) => <NavItem isActive={category.id === prevCategory} key={category.id} onClick={handleSelectCategory(category.id)}>{category.name}</NavItem>)}
        </Nav>
      </Header>
      <CatsWrapper>
        {data.map((cat: any) => <CatWrapper>
          <CatImg key={cat.id} alt={cat.categories[0].name} src={cat.url} />
        </CatWrapper>)}
      </CatsWrapper>
      <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
    </AppWrapper>
  )
};

export default Home;