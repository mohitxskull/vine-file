import vine from '@vinejs/vine'

export const EmailSchema = vine.string().email()

export const ImageFileSchema = vine.file({ extnames: ['png', 'jpg', 'jpeg'], size: '5mb' })
