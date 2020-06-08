// IP: internet protocol
// socket: a line across which info flows; where it flows when it goes from one computer to another
// TCP: transmission control protocol; the protocol for how the informtaion like HTTP, FTP is sent; 
//      take the info and split it into pieces and sed the pieces one at a time through the socket
//      from computer to computer
// packet: individual piece sent over TCP

// we typicaly think of node as a web server, but it can also be used as an email or ftp server
// tcp is the same concept/idea as a stream. therefore node treats the packets as streams
// web sockets are kept pen constantly