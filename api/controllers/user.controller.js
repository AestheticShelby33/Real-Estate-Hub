import express from 'express'

export const testFunction =(req, res)=>{
    res.json({
        message: " This is a test route"
    })
}