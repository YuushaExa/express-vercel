import '../../api/script.js'; // Import and execute the script file

export default function handler(req, res) {
  res.status(200).json({ message: 'Script executed successfully' });
}
