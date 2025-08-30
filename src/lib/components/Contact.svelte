<script>
  import { onMount } from 'svelte';
  
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = false;
  let errorMessage = '';

  // Netlify Forms Integration
  onMount(() => {
    // Netlify Forms wird automatisch erkannt, wenn das Formular die richtigen Attribute hat
    if (typeof window !== 'undefined' && window.netlify) {
      window.netlify.setIdentity({
        url: window.location.origin
      });
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    isSubmitting = true;
    submitSuccess = false;
    submitError = false;
    errorMessage = '';

    try {
      // Netlify Forms - einfache Methode
      const form = event.target;
      const formDataObj = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        submitSuccess = true;
        formData = { name: '', email: '', message: '' };
        form.reset();
      } else {
        throw new Error('Netlify Forms Fehler');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      submitError = true;
      errorMessage = 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per Email.';
    } finally {
      isSubmitting = false;
    }
  };

  const handleInput = (field, value) => {
    formData[field] = value;
  };
</script>

<section id="kontakt" class="section contact-section">
  <div class="content animate-slide-up">
    <h2>Kontakt</h2>
    
    <div class="contact-form">
      <form 
        name="contact" 
        method="POST" 
        netlify
        on:submit={handleSubmit}
      >
        
        <div class="form-group">
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            value={formData.name}
            on:input={(e) => handleInput('name', e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div class="form-group">
          <input 
            type="email" 
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            on:input={(e) => handleInput('email', e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div class="form-group">
          <textarea 
            name="message"
            placeholder="Nachricht"
            rows="5"
            value={formData.message}
            on:input={(e) => handleInput('message', e.target.value)}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn" disabled={isSubmitting}>
          {#if isSubmitting}
            <i class="fas fa-spinner fa-spin"></i>
            Wird gesendet...
          {:else}
            Senden
          {/if}
        </button>
      </form>
      
      {#if submitSuccess}
        <div class="success-message">
          <i class="fas fa-check-circle"></i>
          <p>Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.</p>
        </div>
      {/if}
      
      {#if submitError}
        <div class="error-message">
          <i class="fas fa-exclamation-circle"></i>
          <p>{errorMessage || 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.'}</p>
        </div>
      {/if}
      

    </div>
  </div>
</section>

<style>
  .section {
    padding: 80px 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .contact-form {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 8px 32px var(--shadow-color);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--input-border);
    border-radius: 10px;
    background: var(--input-bg);
    font-size: 1rem;
    transition: all 0.3s ease;
    box-sizing: border-box;
    color: var(--text-primary);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #667eea;
    background: var(--input-bg);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .form-group input:disabled,
  .form-group textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .success-message,
  .error-message {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    margin: 2rem 0;
  }

  .success-message {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #166534;
  }

  .error-message {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #991b1b;
  }

  .success-message i,
  .error-message i {
    font-size: 1.2rem;
  }

  .contact-info {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  .contact-item:last-child {
    margin-bottom: 0;
  }

  .contact-item i {
    font-size: 1.2rem;
    color: #667eea;
  }

  .hidden {
    display: none;
  }

  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .contact-form {
      padding: 2rem;
    }
  }
</style>
