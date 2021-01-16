import "./styles.scss";

const SocialMedia = () => (
    <div className="container-fluid pb-3" id="social-media">
        <div className="row">
            <div className="col-md-6 col-lg-4 py-3">
                <a
                    href="https://www.linkedin.com/in/Cyrille%20Essoh"
                    title="LinkedIn Cyrille Essoh"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-linkedin"></i> / Cyrille Essoh
                </a>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
                <a
                    href="https://www.facebook.com/cyril.essohmisse"
                    title="Facebook Cyrille Essoh"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-facebook"></i> / cyrille.essohmisse
                </a>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
                <a
                    href="skype:Cyrille Essoh?call"
                    title="Skype Cyrille Essoh"
                    target="_blank"
                    rel="noreferrer"
                    className="skype-link"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z" />
                    </svg>{" "}
                    / Cyrille Essoh
                </a>
            </div>
        </div>
    </div>
);

export default SocialMedia;