import PropTypes from "prop-types";

const GitHubCard = ({ userName }) => {
  const url = `https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true`;
  const theme = "&theme=white";

  return (
    <picture>
      <source srcSet={url + theme} media="(prefers-color-scheme: dark)" />
      <source
        srcSet={url}
        media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
      />
      <img src={url} />
    </picture>
  );
};

GitHubCard.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default GitHubCard;
