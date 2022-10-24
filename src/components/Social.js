import './Social.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Social() {

  return (
    <ul className="social">
      <li>
        <a href="https://www.linkedin.com/in/veremenko/">
          <LinkedInIcon color="secondary" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Vlad-Lab319">
          <GitHubIcon color="secondary" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/vladimir.eremenko.3">
          <FacebookIcon color="secondary" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/vladcoder.ca/">
          <InstagramIcon color="secondary" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vladcoder">
          <TwitterIcon color="secondary" />
        </a>
      </li>
      <li>
        <a href="https://resume.creddle.io/resume/fa0mvpkt2bk">
          <PictureAsPdfIcon color="secondary" />
        </a>
      </li>
    </ul>
  );
}

export default Social;