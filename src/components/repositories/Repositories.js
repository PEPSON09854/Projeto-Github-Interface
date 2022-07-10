import React, { useEffect, useState } from 'react'
import useGithub from '../../hooks/Hooks';
import RepositoryItem from '../repositoyItem/RepositoryItem'
import * as S from './StyledRepositories'

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub ();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WarapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WarapperTabList>
            <S.WarapperTab>Repositories</S.WarapperTab>
            <S.WarapperTab>Starred</S.WarapperTab>
          </S.WarapperTabList>
          <S.WarapperTabPanel>
            <S.WarapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WarapperList>
          </S.WarapperTabPanel>
          <S.WarapperTabPanel>
            <S.WarapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WarapperList>
          </S.WarapperTabPanel>
        </S.WarapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
