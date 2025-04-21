import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  category: { type: String},
  product_name: { type: String },
//   username: { type: String, required: true, unique: true },
//   userPassword: { type: String, required: true },
//   deleted: { type: Boolean, default: false },
  data: [
    {
        title: { type: String },
      img: { type: String },
      link: { type: String }
    }
 ],
 createdAt: {
  type: Date,
  default: Date.now
}
//   education: [
//     {
//       school_name: { type: String },
//       course: { type: String }
//     }
//   ],
//   work_experience: [
//     {
//       company: { type: String },
//       position: { type: String },
//       year: { type: String },
//       job_description: { type: String }
//     }
//   ],
//   skills: [
//     {
//       list_skills: { type: String },
//       skills_level: { type: Number }
//     }
//   ],
//   portfolio: [
//     {
//       image_url: { type: String },
//       project_title: { type: String },
//       project_url: { type: String }
//     }
//   ]
}); 

const DoneProject = mongoose.model('doneProject', userSchema, 'listProject');

export default DoneProject;
