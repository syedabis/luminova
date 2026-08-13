'use client';

import React from 'react';
import { Database, Search, Layers, RefreshCw, FileText, Check } from 'lucide-react';

export default function TechVectorRAG() {
  const steps = [
    {
      num: "01",
      title: "Document Ingestion & Chunking",
      desc: "Enterprise PDFs, SQL tables, and Notion bases are split using semantic paragraph chunking with preserved header metadata.",
      color: "#38bdf8"
    },
    {
      num: "02",
      title: "Hybrid Embedding Indexing",
      desc: "Dual indexing generating 1536-dim OpenAI dense vectors alongside sparse BM25 keyword tokens for exact matching.",
      color: "#c084fc"
    },
    {
      num: "03",
      title: "Cohere Rerank v3 Filtering",
      desc: "Top 50 vector retrieval matches are re-scored using Cohere's neural cross-encoder, filtering out 98% of noise.",
      color: "#34d399"
    },
    {
      num: "04",
      title: "Sub-Second LLM Synthesis",
      desc: "Cleaned context is injected into GPT-4o with strict citation bounds, delivering instant verifiable answers.",
      color: "#f59e0b"
    }
  ];

  const dbStack = [
    { name: "Pinecone Vector DB", role: "Ultra-low latency sub-50ms vector query execution across 10M+ documents." },
    { name: "Supabase PgVector", role: "Transactional relational storage combined with native HNSW vector index." },
    { name: "Qdrant Vector DB", role: "Self-hosted high-throughput payload filtering for strict data privacy." },
    { name: "Cohere Rerank v3", role: "Cross-encoder model boosting RAG precision from 72% to 99.4% accuracy." }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#010101', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '20px'
          }}>
            <Database size={15} color="#38bdf8" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              RAG & KNOWLEDGE RETRIEVAL ENGINE
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(34px, 4.8vw, 52px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Multi-Vector Hybrid Search & RAG Architecture
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>
            Eliminating hallucination through hybrid dense-sparse vector search, metadata filtering, and neural reranking.
          </p>
        </div>

        {/* 4 Stage Pipeline Diagram */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          {steps.map((s, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative'
              }}
              className="hover-card-glow"
            >
              <div style={{
                fontSize: '32px',
                fontWeight: 900,
                color: s.color,
                marginBottom: '16px',
                fontFamily: 'monospace'
              }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* DB & Vector Stack Breakdown */}
        <div style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '24px' }}>
            Enterprise Vector Storage & Neural Reranking Stack
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {dbStack.map((db, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '20px'
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8', marginBottom: '6px' }}>
                  {db.name}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>
                  {db.role}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
