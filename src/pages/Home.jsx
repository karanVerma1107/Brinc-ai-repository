import React, {useState, useEffect} from "react";
import "./Home.css";
import heroImg from "./homepiiic.webp";
import {
  FaTag,
  FaFont,
  FaBrain,
  FaCamera,
  FaMicrophone,
  FaCogs,
  FaEye,
  FaEnvelopeOpenText
} from "react-icons/fa";
import { FaBullseye, FaCheckCircle, FaUsers, FaRocket } from "react-icons/fa";
import { TbFileTextSpark } from "react-icons/tb";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar, Legend
} from "recharts";
import GaugeChart from "react-gauge-chart";

const scalingData = [
  { volume: 50000, accuracy: 98.9 },
  { volume: 150000, accuracy: 99.2 },
  { volume: 300000, accuracy: 99.4 },
  { volume: 400000, accuracy: 99.5 },
  { volume: 500000, accuracy: 99.6 }
];

const reviewData = [
  { stage: "Initial Labeling", errorRate: 2.5 },
  { stage: "Peer Review", errorRate: 1.1 },
  { stage: "Expert Validation", errorRate: 0.5 }
];

const slaData = [
  { volume: 50000, hours: 18 },
  { volume: 200000, hours: 20 },
  { volume: 350000, hours: 22 },
  { volume: 500000, hours: 24 }
];



const Home = () => {

const [speed, setSpeed] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= 24) {
        current = 24;
        clearInterval(interval);
      }
      setSpeed(current);
    }, 40);
  }, []);

 const [gaugeValue, setGaugeValue] = useState(0);

  useEffect(() => {
    let val = 0;
    const interval = setInterval(() => {
      val += 0.02;
      if (val >= 0.95) clearInterval(interval);
      setGaugeValue(val);
    }, 40);
  }, []);

 const [open, setOpen] = useState(false);

  return (
    <>
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay">
        <h1 className="title">
          <span className="fall">BRINC</span>{" "}
          <span className="fall ai">AI</span>
        </h1>

        <p className="subtitle">
          Transform your raw data into AI-ready datasets with precision, speed,
          and human expertise.
        </p>

        <div className="buttons">
    <button className="btn btn-outline">
      Annotate Your Data
    </button>

    <button className="btn btn-primary">
      Learn More
    </button>
  </div>
      </div>

      {/* Wave Bottom */}
      <div className="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,80 
               C360,120 1080,40 1440,80 
               L1440,150 
               L0,150 
               Z"
          ></path>
        </svg>
      </div>
    </div>
  
   <div className="services">
  <div className="services-content">
    <h2>Our Services</h2>
    <p className="services-sub">
      Comprehensive annotation services tailored to your AI needs
    </p>

    <div className="cards">
      <div className="card">
        <FaTag className="icon" />
        <h3>Image Labeling</h3>
        <p>
          Bounding boxes, polygons, semantic segmentation, and keypoint annotation.
        </p>
      </div>

      <div className="card">
        <TbFileTextSpark className="icon" />
        <h3>Text Annotation</h3>
        <p>
          Named entity recognition, sentiment analysis, intent classification.
        </p>
      </div>

      <div className="card">
        <FaBrain className="icon" />
        <h3>NLP Tasks</h3>
        <p>
          Language understanding, relation extraction, coreference resolution.
        </p>
      </div>

      <div className="card">
        <FaEye className="icon" />
        <h3>Computer Vision</h3>
        <p>
          Object detection, instance segmentation, 3D point cloud annotation.
        </p>
      </div>

      <div className="card">
        <FaMicrophone className="icon" />
        <h3>Audio Annotation</h3>
        <p>
          Speech transcription, speaker diarization, emotion detection.
        </p>
      </div>

      <div className="card">
        <FaCogs className="icon" />
        <h3>Custom Solutions</h3>
        <p>
          Tailored annotation workflows designed for your AI project needs.
        </p>
      </div>
    </div>
  </div>

  {/* Floating background waves */}
  <div className="services-waves"></div>
</div>

{/* ================= OUR MISSION SECTION ================= */}

<div className="mission">
  <div className="mission-overlay"></div>

  <div className="mission-content">
    <div className="mission-header">
      <FaBullseye className="mission-main-icon" />
      <h2>Our Mission</h2>
      <h3>Powering the Future of AI</h3>
      <p>
        At Brinc AI, we believe exceptional AI starts with exceptional data.
        Our mission is to provide the highest quality data annotation services,
        combining human expertise with cutting-edge technology to help
        organizations build AI systems that truly understand the world.
      </p>
    </div>

    <div className="mission-points">
      <div className="mission-card">
        <FaCheckCircle className="mission-icon" />
        <h4>Precision First</h4>
        <p>99.5%+ accuracy rates with multi-layer quality checks</p>
      </div>

      <div className="mission-card">
        <FaUsers className="mission-icon" />
        <h4>Human Expertise</h4>
        <p>Skilled annotators trained in your domain</p>
      </div>

      <div className="mission-card">
        <FaRocket className="mission-icon" />
        <h4>Scalable Speed</h4>
        <p>From hundreds to millions of annotations</p>
      </div>
    </div>
  </div>
</div>




 <section className="operational-section">
      <div className="operational-container">

        {/* LEFT SIDE */}
        <div className="operational-left">
          <h2 className="operational-title">
            Operational Excellence at Scale
          </h2>

          <div className="metrics-list">
            <div className="metric-item">
              <h3>99.5% Accuracy Rate</h3>
              <p>Multi-tier validation ensures consistent labeling precision.</p>
            </div>

            <div className="metric-item">
              <h3>24hr Turnaround</h3>
              <p>SLA-backed delivery across high-volume pipelines.</p>
            </div>

            <div className="metric-item">
              <h3>500K+ Daily Annotations</h3>
              <p>Stable distributed workforce scaling.</p>
            </div>

            <div className="metric-item">
              <h3>100% Data Security</h3>
              <p>SOC 2 compliant encrypted infrastructure.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="operational-dashboard">

          <div className="dashboard-card">
            <h4>Accuracy vs Volume</h4>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={scalingData}>
                <CartesianGrid stroke="#222" />
                <XAxis
                  dataKey="volume"
                  tick={{ fill: "#aaa", fontSize: 10 }}
                />
                <YAxis
                  domain={[98.5, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: "#aaa", fontSize: 10 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#f97316"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="dashboard-card">
            <h4>QA Error Reduction</h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={reviewData}>
                <CartesianGrid stroke="#222" />
                <XAxis tick={{ fill: "#aaa", fontSize: 10 }} dataKey="stage" />
                <YAxis
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: "#aaa", fontSize: 10 }}
                />
                <Tooltip />
                <Bar dataKey="errorRate" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="dashboard-card">
            <h4>SLA Stability</h4>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={slaData}>
                <CartesianGrid stroke="#222" />
                <XAxis tick={{ fill: "#aaa", fontSize: 10 }} dataKey="volume" />
                <YAxis tick={{ fill: "#aaa", fontSize: 10 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="dashboard-card">
  <h4>Live Operational Throughput</h4>

  <div className="throughput-grid">

    {/* Gauge */}
    <div className="gauge-wrapper">
      <GaugeChart
        id="gauge"
        percent={gaugeValue}
        nrOfLevels={20}
        arcWidth={0.28}
        colors={["#ef4444", "#f97316", "#22c55e"]}
        textColor="#ffffff"
        animate={false}
      />
      <div className="gauge-label">
        {(gaugeValue * 100).toFixed(0)}% Capacity
      </div>
    </div>

    {/* Metrics Panel */}
    <div className="throughput-metrics">
      <div className="throughput-item">
        <span className="metric-title">Processing Rate</span>
        <span className="metric-value">8,200 items/min</span>
      </div>

      <div className="throughput-item">
        <span className="metric-title">Active Annotators</span>
        <span className="metric-value">1,240</span>
      </div>

      <div className="throughput-item">
        <span className="metric-title">SLA Health</span>
        <span className="metric-value green">On Track</span>
      </div>

      <div className="throughput-item">
        <span className="metric-title">Queue Backlog</span>
        <span className="metric-value">3.2 hrs buffer</span>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>

 {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <h3>Let's Build Better AI Together</h3>
          <p>
            Partner with Brinc AI and transform your data into the foundation
            of intelligent systems.
          </p>

          <button className="cta-btn" onClick={() => setOpen(true)}>
            Contact Us Now to Annotate Your Data
          </button>
        </div>
      </section>

      {/* POPUP MODAL */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            <h3>Contact Our Team</h3>

            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>

            <p className="response-note">
              You will soon hear from our team.
            </p>
          </div>
        </div>
      )}



<footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Brinc AI</h3>
          <p>
            Premium data annotation services powering the next generation of
            artificial intelligence.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>xyz@gmail.com</p>
        </div>

        <div className="footer-follow">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Brinc AI. All rights reserved.
      </div>
    </footer>

    </>
  );
};

export default Home;