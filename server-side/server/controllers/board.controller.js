import Board from '../models/board'

export const getAllBoards = async(req, res) => {
  try {
    const boards = await Board.find({})
    return res.send( {array: boards} )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getActiveBoards = async( req, res ) => {
  try {
    const boards = await Board.find( { isActive: true } )
    return res.send( { array: boards } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createBoard = async( req, res ) => {
  try {
    const board = await Board.create(  req.body )
    return res.send(board)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const updateBoard = async( req, res ) => {
  try {
    const board = await Board.findByIdAndUpdate( req.params._id, req.body, { new: true } )
    return res.send( board )
  } catch (e) {
    return res.status(500).send(e)
  }
}
