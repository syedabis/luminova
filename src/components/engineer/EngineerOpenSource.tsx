'use client';

import React from 'react';
import { Github, Star, GitFork, Terminal, Code2, ExternalLink } from 'lucide-react';

export default function EngineerOpenSource() {
  const repos = [
    {
      name: "fastapi-llm-guardrails",
      stars: "1.4k",
      forks: "210",
      description: "Python middleware for FastAPI ensuring Pydantic JSON schema validation and zero-hallucination fallbacks for OpenAI & Claude endpoints.",
      tech: ["Python", "FastAPI", "Pydantic", "OpenAI"],
      link: "https://github.com"
    },
    {
      name: "langchain-pinecone-hybrid",
      stars: "890",
      forks: "145",
      description: "High-performance hybrid vector retrieval package combining dense OpenAI embeddings with sparse BM25 keyword rankings.",
      tech: ["TypeScript", "LangChain", "Pinecone", "RAG"],
      link: "https://github.com"
    },
    {
      name: "n8n-nodes-retell-ai",
      stars: "620",
      forks: "95",
      description: "Custom community node for n8n to trigger, manage, and process real-time voice call webhooks from Retell AI & Vapi.",
      tech: ["JavaScript", "n8n Workflows", "Voice AI"],
      link: "https://github.com"
    }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#06080d', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(192, 132, 252, 0.1)',
            border: '1px solid rgba(192, 132, 252, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Github size={15} color="#c084fc" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              OPEN SOURCE & GITHUB
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Community Contributions & Repositories
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Building open-source tooling and middleware adopted by developers and AI engineers worldwide.
          </p>
        </div>

        {/* 3 Github Repo Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="hover-card-glow"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Code2 size={20} color="#c084fc" />
                    <span style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={16} color="#64748b" />
                </div>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                  {repo.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '13px', color: '#cbd5e1' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} color="#f59e0b" fill="#f59e0b" /> {repo.stars}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <GitFork size={14} color="#94a3b8" /> {repo.forks}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {repo.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        backgroundColor: 'rgba(192, 132, 252, 0.1)',
                        border: '1px solid rgba(192, 132, 252, 0.2)',
                        color: '#c084fc',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
