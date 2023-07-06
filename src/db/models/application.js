import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    osi: mongoose.Schema.Types.Boolean,
    status: {type: String, default: 'new'}
}, {
    timestamps: true
});

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;