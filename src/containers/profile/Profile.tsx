import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "@/portfolio";
import Contact from "@/containers/contact/Contact";
import Loading from "@/containers/loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("@/components/githubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState<any>([]);
  function setProfileFunction(array: any) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof?.id || 'profile'} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
