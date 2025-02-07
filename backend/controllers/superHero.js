let superheroes = []; // In-memory database

// Validation function
const validateSuperHero = (name, super_power, humility_score) => {
  if (!name || !super_power || humility_score === undefined) {
    return 'Name, super power, and humility score are required.';
  }
  if (
    typeof humility_score !== 'number' ||
    humility_score < 1 ||
    humility_score > 10
  ) {
    return 'Humility score must be a number between 1 and 10.';
  }
  return null;
};

// POST /superheroes - Add a new superhero
export const addSuperHero = async (req, res) => {
  const { name, super_power, humility_score } = req.body;

  const error = validateSuperHero(name, super_power, humility_score);
  if (error) {
    return res.status(400).json({ message: error });
  }

  const newHero = { name, super_power, humility_score };
  superheroes.push(newHero);

  res.status(201).json({
    message: 'Superhero added successfully',
    superheroes,
  });
};

// GET /superheroes - Fetch superheroes sorted by humility score
export const getSuperHero = async (req, res) => {
  try {
    const sortedSuperheroes = superheroes.sort(
      (a, b) => b.humility_score - a.humility_score
    );
    res.status(200).json({
      message: 'Superheroes fetched successfully',
      superheroes: sortedSuperheroes,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch superheroes',
      error: err.message,
    });
  }
};
