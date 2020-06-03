// stream: a sequence of pieces of data
// streams are event emitters. they have access to on and emit
// there are now readable (read data) and writable (can only send, nto read) streams,
// duplex (read and write) and transform (change data as it moves through)

// abstract (base) class: a type of constructor you never work directly with, but inherit from