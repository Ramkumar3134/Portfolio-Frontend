import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Contact.css';
import { createContact } from "../api/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brief: '',
    websiteUrl: '',
    companyStage: '',
    deadline: '',
    budget: '',
    howHeard: [],
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const frontendEmail = 'lramkumar3134@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(frontendEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleHowHeardClick = (option) => {
    setFormData((prevData) => {
      const updatedHowHeard = prevData.howHeard.includes(option)
        ? prevData.howHeard.filter((item) => item !== option)
        : [...prevData.howHeard, option];
      
      return {
        ...prevData,
        howHeard: updatedHowHeard,
      };
    });
    
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.brief.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Clean the data before sending
      const cleanedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        brief: formData.brief.trim(),
        websiteUrl: formData.websiteUrl.trim() || undefined,
        companyStage: formData.companyStage || undefined,
        deadline: formData.deadline || undefined,
        budget: formData.budget || undefined,
        howHeard: formData.howHeard.length > 0 ? formData.howHeard : undefined,
      };

      console.log("Sending data to backend:", cleanedData);
      
      const response = await createContact(cleanedData);
      
      if (response.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          brief: '',
          websiteUrl: '',
          companyStage: '',
          deadline: '',
          budget: '',
          howHeard: [],
        });
      } else {
        setSubmitStatus('error');
      }
      
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const howHeardOptions = [
    'Wedding partners',
    'Awareness',
    'Search engine',
    'Social media',
    'Word of mouth',
    'News article or blog',
    'Other'
  ];

  return (
    <div className="contact-page-container">
      <header className="contact-header">
        <h1>LET'S WORK TOGETHER</h1>
        <p>
          Get in touch today if you're looking to launch a website, refine your
          existing site, or discuss a potential collaboration, and let's find
          solutions together.
        </p>
      </header>

      {/* Status Notification */}
      {submitStatus === 'success' && (
        <div className="status-notification success">
          <div className="notification-content">
            <span className="notification-icon">✓</span>
            <div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for your inquiry. I'll get back to you within 24 hours.</p>
            </div>
            <button 
              className="notification-close"
              onClick={() => setSubmitStatus(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="status-notification error">
          <div className="notification-content">
            <span className="notification-icon">⚠</span>
            <div>
              <h3>Something Went Wrong</h3>
              <p>Please try again or email me directly at {frontendEmail}</p>
            </div>
            <button 
              className="notification-close"
              onClick={() => setSubmitStatus(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="contact-content">
        <div className="contact-info-column">
          <div className="info-box">
            <span className="info-label">[EMAIL]</span>
            <div className="email-row">
              <a href={`mailto:${frontendEmail}`} className="email-link">
                {frontendEmail}
              </a>
              <button 
                type="button"
                onClick={handleCopyEmail} 
                className="copy-button"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="info-box">
            <span className="info-label">[FOR COLLABORATORS]</span>
            <p>
              I'm always open to partnering up with creatives, developers,
              agencies, and whoever is interested in my work. Send me an email
              and let's discuss.
            </p>
          </div>

          <div className="info-box">
            <span className="info-label">[FOR QUESTIONS]</span>
            <p>
              Have questions? Check out the <Link to="/faq">FAQ</Link> below or
              feel free to contact me.
            </p>
          </div>

          <div className="info-box">
            <span className="info-label">[BACK TO HOME]</span>
            <Link to="/" className="go-home-button">
              Go to Home
            </Link>
          </div>
        </div>

        <form className="contact-form-column" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">WHAT'S YOUR NAME?</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">WHAT'S YOUR EMAIL?</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="brief">WHAT'S YOUR BRIEF?</label>
            <textarea
              id="brief"
              name="brief"
              placeholder="Write your brief here: I need ___ with this scope, pages, specific needs"
              rows="5"
              value={formData.brief}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="websiteUrl">CURRENT WEBSITE URL</label>
              <input
                id="websiteUrl"
                type="url"
                name="websiteUrl"
                placeholder="www.example.com"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-field">
              <label htmlFor="companyStage">COMPANY STAGE</label>
              <select 
                id="companyStage"
                name="companyStage" 
                onChange={handleInputChange}
                value={formData.companyStage}
                disabled={isSubmitting}
              >
                <option value="">Please select</option>
                <option value="startup">Startup</option>
                <option value="established">Established Company</option>
                <option value="individual">Individual</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="deadline">DO YOU HAVE A DEADLINE?</label>
              <select 
                id="deadline"
                name="deadline" 
                onChange={handleInputChange}
                value={formData.deadline}
                disabled={isSubmitting}
              >
                <option value="">Please select</option>
                <option value="urgent">Urgent</option>
                <option value="flexible">Flexible</option>
                <option value="no-deadline">No Deadline</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="budget">WHAT IS YOUR ESTIMATED BUDGET?</label>
              <select 
                id="budget"
                name="budget" 
                onChange={handleInputChange}
                value={formData.budget}
                disabled={isSubmitting}
              >
                <option value="">Please select</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-20k">$10k - $20k</option>
                <option value="20k-plus">$20k+</option>
              </select>
              <small>We'll confirm this together, don't worry.</small>
            </div>
          </div>

          <div className="form-field">
            <label>HOW DID YOU HEAR ABOUT ME?</label>
            <div className="how-heard-options">
              {howHeardOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={formData.howHeard.includes(option) ? 'selected' : ''}
                  onClick={() => handleHowHeardClick(option)}
                  disabled={isSubmitting}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.brief}
          >
            {isSubmitting ? (
              <>
                <span className="button-spinner"></span>
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;