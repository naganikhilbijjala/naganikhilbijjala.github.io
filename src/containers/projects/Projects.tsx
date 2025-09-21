import React, {useState, useEffect, Suspense, lazy} from "react";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import Loading from "../../containers/loading/Loading";
import { useStyleContext } from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useStyleContext();
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array: any) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="py-[60px] px-5 mx-auto max-w-[1400px]" id="opensource">
          <h1 className="text-[48px] font-normal leading-[1.2] my-0 mb-5 text-black max-xl:text-[40px] max-md:text-[30px] max-md:text-center">Open Source Projects</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 max-md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node?.id || i} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
