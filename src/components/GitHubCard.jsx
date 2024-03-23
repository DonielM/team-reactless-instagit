import PropTypes from "prop-types";

const GitHubCard = ({ userName }) => {
  const srcset = `https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true`;
  const theme = "&theme=dark";

  return (
    <picture>
      <source srcset={srcset + theme} media="(prefers-color-scheme: dark)" />
      <source
        srcset={srcset}
        media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
      />
      <img src={srcset} />
    </picture>
  );
};

GitHubCard.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default GitHubCard;
