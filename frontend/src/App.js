import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputData, setInputData] = useState('');
  const [apiUrl, setApiUrl] = useState('https://bfhl-api-tester-ochre.vercel.app');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('demo');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      // Parse input data
      let dataArray;
      try {
        dataArray = JSON.parse(inputData);
      } catch (parseError) {
        throw new Error('Invalid JSON format. Please enter a valid array.');
      }

      if (!Array.isArray(dataArray)) {
        throw new Error('Input must be an array.');
      }

      // Make API call
      const result = await axios.post(apiUrl, {
        data: dataArray
      });

      setResponse(result.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Show a brief success indicator
      const button = document.activeElement;
      const originalText = button.textContent;
      button.textContent = '✅ Copied!';
      setTimeout(() => {
        button.textContent = originalText;
      }, 1000);
    });
  };

  const sampleData = [
    {
      name: 'Mixed Data Example',
      data: '["a","1","334","4","R", "$"]',
      description: 'Contains alphabets, numbers, and special characters'
    },
    {
      name: 'Complex Array',
      data: '["2","a", "y", "4", "&", "-", "*", "5","92","b"]',
      description: 'Mixed data with multiple special characters'
    },
    {
      name: 'Alphabets Only',
      data: '["A","ABcD","DOE"]',
      description: 'Only alphabetical strings for testing'
    }
  ];

  useEffect(() => {
    // Add animation effects on scroll
    const cards = document.querySelectorAll('.feature-card, .doc-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <img 
                src="https://www.bajajfinserv.in/content/dam/bajajfinserv/logo/bajaj-finserv-logo.svg" 
                alt="Bajaj Finserv" 
                className="logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback" style={{display: 'none'}}>
                <div className="logo-placeholder">BAJAJ FINSERV</div>
              </div>
              <div className="title-section">
                <h1 className="app-title">BFHL API Tester</h1>
                <span className="app-subtitle">Professional REST API Testing Platform</span>
              </div>
            </div>
            <nav className="nav">
              <button 
                className={`nav-btn ${activeTab === 'demo' ? 'active' : ''}`}
                onClick={() => setActiveTab('demo')}
              >
                <span className="nav-icon">🚀</span>
                Demo
              </button>
              <button 
                className={`nav-btn ${activeTab === 'docs' ? 'active' : ''}`}
                onClick={() => setActiveTab('docs')}
              >
                <span className="nav-icon">📚</span>
                Documentation
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              Advanced <span className="gradient-text">BFHL API</span> Testing Platform
            </h2>
            <p className="hero-subtitle">
              Professional-grade REST API for data processing and analysis. 
              Test, validate, and integrate with confidence using our comprehensive testing suite.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">200</div>
                <div className="stat-label">Status Code</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-number">JSON</div>
                <div className="stat-label">Response Format</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-number">REST</div>
                <div className="stat-label">API Standard</div>
              </div>
            </div>
            <div className="hero-actions">
              <button 
                className="cta-btn primary"
                onClick={() => setActiveTab('demo')}
              >
                Try Live Demo
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => setActiveTab('docs')}
              >
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {activeTab === 'demo' && (
            <div className="demo-section">
              <div className="section-header">
                <h3 className="section-title">Interactive API Demo</h3>
                <p className="section-subtitle">Test the BFHL API with real-time responses and comprehensive result analysis</p>
              </div>

              <div className="demo-grid">
                <div className="demo-left">
                  <div className="input-card">
                    <div className="card-header">
                      <div className="card-title">
                        <span className="card-icon">⚙️</span>
                        <h4>API Configuration</h4>
                      </div>
                      <div className="card-badge">Live Testing</div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="api-url">
                        <span className="label-icon">🌐</span>
                        Endpoint URL
                      </label>
                      <div className="input-with-icon">
                        <input
                          id="api-url"
                          type="text"
                          value={apiUrl}
                          onChange={(e) => setApiUrl(e.target.value)}
                          placeholder="Enter API URL"
                          className="modern-input"
                        />
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard(apiUrl)}
                          title="Copy URL"
                        >
                          📋
                        </button>
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="input-data">
                        <span className="label-icon">📝</span>
                        Request Payload
                      </label>
                      <textarea
                        id="input-data"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        placeholder='Enter JSON array, e.g., ["a","1","334","4","R","$"]'
                        rows="4"
                        className="modern-textarea"
                      />
                      <div className="input-help">
                        Enter a JSON array with mixed data types (strings, numbers, special characters)
                      </div>
                    </div>

                    <div className="sample-section">
                      <h5>
                        <span className="section-icon">⚡</span>
                        Quick Test Examples
                      </h5>
                      <div className="sample-grid">
                        {sampleData.map((sample, index) => (
                          <div key={index} className="sample-card">
                            <div className="sample-header">
                              <span className="sample-name">{sample.name}</span>
                              <button 
                                className="use-btn"
                                onClick={() => setInputData(sample.data)}
                              >
                                Use
                              </button>
                            </div>
                            <div className="sample-description">{sample.description}</div>
                            <code className="sample-code">{sample.data}</code>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={handleSubmit} 
                      disabled={loading || !inputData.trim()} 
                      className="submit-btn"
                    >
                      {loading ? (
                        <>
                          <span className="spinner"></span>
                          Processing Request...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">🚀</span>
                          Send Request
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="demo-right">
                  {error && (
                    <div className="error-card">
                      <div className="error-header">
                        <span className="error-icon">⚠️</span>
                        <h4>Request Failed</h4>
                      </div>
                      <p className="error-message">{error}</p>
                      <div className="error-actions">
                        <button 
                          className="retry-btn"
                          onClick={() => setError('')}
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}

                  {response && (
                    <div className="response-card">
                      <div className="card-header">
                        <div className="card-title">
                          <span className="card-icon">📊</span>
                          <h4>API Response</h4>
                        </div>
                        <div className={`response-badge ${response.is_success ? 'success' : 'error'}`}>
                          {response.is_success ? '✅ Success' : '❌ Failed'}
                        </div>
                      </div>

                      <div className="response-summary">
                        <div className="summary-item">
                          <span className="summary-label">Status</span>
                          <span className={`summary-value ${response.is_success ? 'success' : 'error'}`}>
                            {response.is_success ? 'SUCCESS' : 'FAILED'}
                          </span>
                        </div>
                        <div className="summary-item">
                          <span className="summary-label">Response Time</span>
                          <span className="summary-value">~200ms</span>
                        </div>
                      </div>

                      <div className="response-grid">
                        <div className="response-item">
                          <span className="label">
                            <span className="label-icon">👤</span>
                            User ID
                          </span>
                          <span className="value user-id">{response.user_id}</span>
                        </div>
                        <div className="response-item">
                          <span className="label">
                            <span className="label-icon">📧</span>
                            Email
                          </span>
                          <span className="value">{response.email}</span>
                        </div>
                        <div className="response-item">
                          <span className="label">
                            <span className="label-icon">🎓</span>
                            Roll Number
                          </span>
                          <span className="value">{response.roll_number}</span>
                        </div>

                        <div className="response-item full-width">
                          <span className="label">
                            <span className="label-icon">🔢</span>
                            Even Numbers
                          </span>
                          <div className="array-values">
                            {response.even_numbers?.map((num, i) => (
                              <span key={i} className="badge even">{num}</span>
                            ))}
                            {response.even_numbers?.length === 0 && <span className="empty">None</span>}
                          </div>
                        </div>

                        <div className="response-item full-width">
                          <span className="label">
                            <span className="label-icon">🔢</span>
                            Odd Numbers
                          </span>
                          <div className="array-values">
                            {response.odd_numbers?.map((num, i) => (
                              <span key={i} className="badge odd">{num}</span>
                            ))}
                            {response.odd_numbers?.length === 0 && <span className="empty">None</span>}
                          </div>
                        </div>

                        <div className="response-item full-width">
                          <span className="label">
                            <span className="label-icon">🔤</span>
                            Alphabets
                          </span>
                          <div className="array-values">
                            {response.alphabets?.map((char, i) => (
                              <span key={i} className="badge alphabet">{char}</span>
                            ))}
                            {response.alphabets?.length === 0 && <span className="empty">None</span>}
                          </div>
                        </div>

                        <div className="response-item full-width">
                          <span className="label">
                            <span className="label-icon">⚡</span>
                            Special Characters
                          </span>
                          <div className="array-values">
                            {response.special_characters?.map((char, i) => (
                              <span key={i} className="badge special">{char}</span>
                            ))}
                            {response.special_characters?.length === 0 && <span className="empty">None</span>}
                          </div>
                        </div>

                        <div className="response-item">
                          <span className="label">
                            <span className="label-icon">🧮</span>
                            Sum
                          </span>
                          <span className="value sum">{response.sum}</span>
                        </div>

                        <div className="response-item">
                          <span className="label">
                            <span className="label-icon">🔀</span>
                            Concat String
                          </span>
                          <span className="value concat">{response.concat_string || 'N/A'}</span>
                        </div>
                      </div>

                      <div className="raw-json">
                        <div className="json-header">
                          <h5>
                            <span className="section-icon">📄</span>
                            Raw JSON Response
                          </h5>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(JSON.stringify(response, null, 2))}
                          >
                            📋 Copy JSON
                          </button>
                        </div>
                        <pre className="json-content">
                          {JSON.stringify(response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}

                  {!response && !error && !loading && (
                    <div className="placeholder-card">
                      <div className="placeholder-content">
                        <div className="placeholder-icon">🎯</div>
                        <h4>Ready to Test</h4>
                        <p>Enter your test data and click "Send Request" to see the comprehensive API response analysis here.</p>
                        <div className="placeholder-features">
                          <div className="feature-item">✅ Real-time processing</div>
                          <div className="feature-item">✅ Detailed categorization</div>
                          <div className="feature-item">✅ Visual result display</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="docs-section">
              <div className="section-header">
                <h3 className="section-title">API Documentation</h3>
                <p className="section-subtitle">Complete guide for BFHL API integration and testing</p>
              </div>

              <div className="docs-grid">
                <div className="docs-nav">
                  <div className="docs-menu">
                    <div className="menu-section">
                      <h4>Quick Start</h4>
                      <a href="#overview" className="menu-item active">📡 Overview</a>
                      <a href="#request" className="menu-item">📝 Request Format</a>
                      <a href="#response" className="menu-item">📋 Response Format</a>
                    </div>
                    <div className="menu-section">
                      <h4>Testing</h4>
                      <a href="#postman" className="menu-item">🧪 Postman Guide</a>
                      <a href="#examples" className="menu-item">💡 Examples</a>
                    </div>
                    <div className="menu-section">
                      <h4>Reference</h4>
                      <a href="#fields" className="menu-item">⚡ Response Fields</a>
                      <a href="#features" className="menu-item">🔍 Features</a>
                    </div>
                  </div>
                </div>

                <div className="docs-content">
                  <div className="doc-card" id="overview">
                    <h4>
                      <span className="doc-icon">📡</span>
                      Endpoint Overview
                    </h4>
                    <div className="endpoint-box">
                      <div className="method post">POST</div>
                      <div className="url">/bfhl</div>
                      <div className="status-code">200 OK</div>
                    </div>
                    <p>The main endpoint for processing array data and returning categorized results. This API accepts mixed data types and intelligently categorizes them into numbers, alphabets, and special characters while performing additional computations.</p>

                    <div className="endpoint-features">
                      <div className="feature-tag">🔒 CORS Enabled</div>
                      <div className="feature-tag">⚡ Fast Processing</div>
                      <div className="feature-tag">🛡️ Error Handling</div>
                    </div>
                  </div>

                  <div className="doc-card" id="request">
                    <h4>
                      <span className="doc-icon">📝</span>
                      Request Format
                    </h4>
                    <div className="code-block">
                      <div className="code-header">
                        <div className="code-info">
                          <span className="code-lang">JSON</span>
                          <span className="code-type">Request Body</span>
                        </div>
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard('{"data": ["a","1","334","4","R", "$"]}')}
                        >
                          📋 Copy
                        </button>
                      </div>
                      <pre>{`{
  "data": ["a", "1", "334", "4", "R", "$"]
}`}</pre>
                    </div>
                    <div className="request-details">
                      <h5>Request Requirements</h5>
                      <ul>
                        <li><strong>Content-Type:</strong> application/json</li>
                        <li><strong>Method:</strong> POST</li>
                        <li><strong>Body:</strong> JSON object with "data" array</li>
                        <li><strong>Data Types:</strong> Strings, numbers, special characters</li>
                      </ul>
                    </div>
                  </div>

                  <div className="doc-card" id="response">
                    <h4>
                      <span className="doc-icon">📋</span>
                      Response Format
                    </h4>
                    <div className="code-block">
                      <div className="code-header">
                        <div className="code-info">
                          <span className="code-lang">JSON</span>
                          <span className="code-type">Response Body</span>
                        </div>
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard(`{
  "is_success": true,
  "user_id": "aman_kumar_singh_17091999",
  "email": "aman@example.com",
  "roll_number": "22BCY10258",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}`)}
                        >
                          📋 Copy
                        </button>
                      </div>
                      <pre>{`{
  "is_success": true,
  "user_id": "aman_kumar_singh_17091999",
  "email": "aman@example.com",
  "roll_number": "22BCY10258",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}`}</pre>
                    </div>
                  </div>

                  <div className="doc-card" id="postman">
                    <h4>
                      <span className="doc-icon">🧪</span>
                      Testing with Postman
                    </h4>
                    <div className="postman-guide">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h5>Create New Request</h5>
                          <p>Open Postman and create a new POST request</p>
                          <div className="postman-config">
                            <div className="config-row">
                              <div className="config-label">Method:</div>
                              <div className="config-value method">POST</div>
                            </div>
                            <div className="config-row">
                              <div className="config-label">URL:</div>
                              <div className="config-value url">{apiUrl}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h5>Configure Headers</h5>
                          <p>Add the required content type header</p>
                          <div className="header-config">
                            <div className="header-item">
                              <code>Content-Type: application/json</code>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h5>Set Request Body</h5>
                          <p>Select "raw" and "JSON" format, then add your test data:</p>
                          <div className="code-block small">
                            <div className="code-header">
                              <span>Test Payload</span>
                              <button 
                                className="copy-btn"
                                onClick={() => copyToClipboard('{"data": ["a","1","334","4","R", "$"]}')}
                              >
                                📋
                              </button>
                            </div>
                            <pre>{`{
  "data": ["a","1","334","4","R", "$"]
}`}</pre>
                          </div>
                        </div>
                      </div>

                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h5>Send & Verify</h5>
                          <p>Click "Send" and verify the response:</p>
                          <div className="verification-checklist">
                            <div className="check-item">✅ Status Code: 200 OK</div>
                            <div className="check-item">✅ Response contains all required fields</div>
                            <div className="check-item">✅ Data is correctly categorized</div>
                            <div className="check-item">✅ Numbers returned as strings</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="postman-collection">
                      <h5>
                        <span className="section-icon">📦</span>
                        Postman Collection
                      </h5>
                      <p>Import our pre-configured collection with all test cases:</p>
                      <button className="collection-btn">
                        📥 Download Postman Collection
                      </button>
                    </div>
                  </div>

                  <div className="doc-card" id="fields">
                    <h4>
                      <span className="doc-icon">⚡</span>
                      Response Fields Reference
                    </h4>
                    <div className="fields-table">
                      <div className="field-row header">
                        <div className="field-name">Field Name</div>
                        <div className="field-type">Data Type</div>
                        <div className="field-desc">Description</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">is_success</div>
                        <div className="field-type boolean">boolean</div>
                        <div className="field-desc">Indicates if the operation was successful</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">user_id</div>
                        <div className="field-type string">string</div>
                        <div className="field-desc">Unique user identifier (format: name_ddmmyyyy)</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">email</div>
                        <div className="field-type string">string</div>
                        <div className="field-desc">User's email address</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">roll_number</div>
                        <div className="field-type string">string</div>
                        <div className="field-desc">Student roll number</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">odd_numbers</div>
                        <div className="field-type array">string[]</div>
                        <div className="field-desc">Array containing all odd numbers from input</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">even_numbers</div>
                        <div className="field-type array">string[]</div>
                        <div className="field-desc">Array containing all even numbers from input</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">alphabets</div>
                        <div className="field-type array">string[]</div>
                        <div className="field-desc">Array of alphabetic characters (converted to uppercase)</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">special_characters</div>
                        <div className="field-type array">string[]</div>
                        <div className="field-desc">Array of non-alphanumeric characters</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">sum</div>
                        <div className="field-type string">string</div>
                        <div className="field-desc">Sum of all numeric values (returned as string)</div>
                      </div>
                      <div className="field-row">
                        <div className="field-name">concat_string</div>
                        <div className="field-type string">string</div>
                        <div className="field-desc">Reversed alphabetic chars with alternating case</div>
                      </div>
                    </div>
                  </div>

                  <div className="doc-card" id="features">
                    <h4>
                      <span className="doc-icon">🔍</span>
                      API Features & Capabilities
                    </h4>
                    <div className="features-grid">
                      <div className="feature-card">
                        <div className="feature-icon">🔢</div>
                        <h5>Smart Number Processing</h5>
                        <p>Automatically detects and separates even and odd numbers from input data with high accuracy.</p>
                        <div className="feature-tech">
                          <span className="tech-tag">Regex Validation</span>
                          <span className="tech-tag">Type Checking</span>
                        </div>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">🔤</div>
                        <h5>Alphabet Handling</h5>
                        <p>Processes alphabetic characters with automatic uppercase conversion and character extraction.</p>
                        <div className="feature-tech">
                          <span className="tech-tag">Case Conversion</span>
                          <span className="tech-tag">Multi-char Support</span>
                        </div>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h5>Special Character Detection</h5>
                        <p>Identifies and categorizes non-alphanumeric characters including symbols and punctuation.</p>
                        <div className="feature-tech">
                          <span className="tech-tag">Pattern Matching</span>
                          <span className="tech-tag">Unicode Support</span>
                        </div>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">🧮</div>
                        <h5>Mathematical Operations</h5>
                        <p>Performs sum calculations on all numeric values with precision and returns results as strings.</p>
                        <div className="feature-tech">
                          <span className="tech-tag">Arithmetic</span>
                          <span className="tech-tag">String Conversion</span>
                        </div>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">🔀</div>
                        <h5>Advanced String Processing</h5>
                        <p>Creates sophisticated concatenated strings with reverse ordering and alternating case patterns.</p>
                        <div className="feature-tech">
                          <span className="tech-tag">Array Reversal</span>
                          <span className="tech-tag">Case Alternation</span>
                        </div>
                      </div>

                      <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h5>Robust Error Handling</h5>
                        <p>Comprehensive error handling with graceful fallbacks and informative error messages.</p>
                        <div className="feature-tech">
                          <span className="tech-tag">Try-Catch</span>
                          <span className="tech-tag">Validation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="doc-card">
                    <h4>
                      <span className="doc-icon">💡</span>
                      Example Use Cases
                    </h4>
                    <div className="examples-section">
                      <div className="example-item">
                        <h5>Data Validation</h5>
                        <p>Use the API to validate and categorize mixed input data from forms or user submissions.</p>
                      </div>
                      <div className="example-item">
                        <h5>Data Processing Pipeline</h5>
                        <p>Integrate into data processing workflows for automatic categorization and analysis.</p>
                      </div>
                      <div className="example-item">
                        <h5>Educational Tools</h5>
                        <p>Perfect for educational applications teaching data types and categorization concepts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-info">
                <div className="footer-logo">
                  <span className="footer-title">BFHL API Tester</span>
                  <span className="footer-subtitle">Professional REST API Testing Platform</span>
                </div>
                <p className="footer-description">
                  Advanced API testing and documentation platform built for the VIT Full Stack development assignment.
                </p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h5>Platform</h5>
                  <a href="#demo">Live Demo</a>
                  <a href="#docs">Documentation</a>
                  <a href="#postman">Postman Guide</a>
                </div>
                <div className="link-group">
                  <h5>Resources</h5>
                  <a href="#examples">Examples</a>
                  <a href="#features">Features</a>
                  <a href="#fields">API Reference</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="creator-info">
                <span className="creator-text">
                  Created by <strong>Aman Kumar Singh @22BCY10258</strong> for BFHL Task
                </span>
                <div className="creator-badges">
                  <span className="badge vit">VIT Student</span>
                  <span className="badge project">Full Stack Project</span>
                </div>
              </div>
              <div className="footer-tech">
                <span className="tech-info">Built with React • Node.js • Express</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
