import Mail from "../modals/mailModal.js";

export const saveSentEmails = async (request, response) => {
    try {
        if (request.body) {
            await Mail.create(request.body)
            return response.status(201).json({ message: 'Email saved successfully', success: true })
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error while Saving Email.', error: error.message })
    }
}

export const getEmails = async (request, response) => {
    try {
        let emails
        if (request.params.type === 'bin') {
            emails = await Mail.find({ bin: true })
        } else if (request.params.type === 'all-mail') {
            emails = await Mail.find({})
        } else if (request.params.type === 'starred') {
            emails = await Mail.find({ starred: true })
        } else {
            emails = await Mail.find({ type: request.params.type })
        }
        return response.status(200).json({ message: `${request.params.type} Emails Fetched successfully`, success: true, emails })
    } catch (error) {
        return response.status(500).json({ message: 'Error while Getting Emails.', error: error.message })
    }
}

export const saveDraftEmails = async (request, response) => {
    try {
        if (request.body) {
            await Mail.create(request.body)
            return response.status(201).json({ message: 'Draft Email saved successfully', success: true })
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error while Saving Email.', error: error.message })
    }
}

export const moveEmailsToBin = async (request, response) => {
    try {
        if (request.body) {
            await Mail.updateMany({ _id: { $in: request.body } }, { $set: { bin: true, starred: false, type: '' } })
            return response.status(200).json({ message: 'Draft Emails moved to bin successfully', success: true })
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error while moving emails to bin.', error: error.message })
    }
}

export const toggleStarredEmails = async (request, response) => {
    try {
        if (request.body) {
            await Mail.updateOne({ _id: request.body.id }, { $set: { starred: request.body.value } })
            return response.status(200).json({ message: 'email starred toggle successfully', success: true })
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error while toggle strarred emails Email.', error: error.message })
    }
}

export const deleteEmails = async (request, response) => {
    try {
        if (request.body) {
            await Mail.deleteMany({ _id: { $in: request.body } })
            return response.status(200).json({ message: 'Emails deleted successfully', success: true })
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error while deleting emails.', error: error.message })
    }
}