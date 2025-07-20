import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  name: { type: String, required: true }
});

const Skill = mongoose.model('Skill', SkillSchema);
export default Skill;
