import Image from "next/image";
//import styles from "./page.module.css";
// pages/index.js
import Link from 'next/link';
import { FaHome, FaFileInvoice, FaUsers } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.buttonGroup}>
        
          <a href="/home" style={styles.button}><FaHome style={styles.icon} />Home</a>
  
  
          <a href="/invoices" style={styles.button}><FaFileInvoice style={styles.icon} />Invoices</a>
  
          <a href="/customers" style={styles.button}><FaUsers style={styles.icon} />Customers</a>
       
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1.25rem',
    backgroundColor: '#2563eb',
    color: 'white',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '500',
  },
  icon: {
    marginRight: '0.5rem',
  },
};
