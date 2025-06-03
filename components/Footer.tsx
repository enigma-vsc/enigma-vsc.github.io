export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem 0', marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
      © {new Date().getFullYear()} Vishal “Enigma”. All rights reserved.
    </footer>
  );
}