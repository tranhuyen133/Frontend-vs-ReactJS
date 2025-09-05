import React from 'react'
import 
function Pagelayout() {
  return (
     <div className="bg-gray-50 p-6 space-y-6 min-h-screen">
      {/* Hình 1.1: Trái */}
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Hình 1.1 - Các phần tử nằm bên trái
        </h2>
        <div className="flex justify-start space-x-4 bg-gray-100 p-4 rounded-lg">
          <div className="bg-blue-300 p-2 rounded">A</div>
          <div className="bg-blue-300 p-2 rounded">B</div>
          <div className="bg-blue-300 p-2 rounded">C</div>
        </div>
      </section>

      {/* Hình 1.2: Phải */}
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Hình 1.2 - Các phần tử nằm bên phải
        </h2>
        <div className="flex justify-end space-x-4 bg-gray-100 p-4 rounded-lg">
          <div className="bg-green-300 p-2 rounded">A</div>
          <div className="bg-green-300 p-2 rounded">B</div>
          <div className="bg-green-300 p-2 rounded">C</div>
        </div>
      </section>

      {/* Hình 1.3: Giữa */}
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Hình 1.3 - Các phần tử nằm ở giữa
        </h2>
        <div className="flex justify-center space-x-4 bg-gray-100 p-4 rounded-lg">
          <div className="bg-yellow-300 p-2 rounded">A</div>
          <div className="bg-yellow-300 p-2 rounded">B</div>
          <div className="bg-yellow-300 p-2 rounded">C</div>
        </div>
      </section>

      {/* Hình 1.4: Giãn ra hai bên */}
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Hình 1.4 - Các phần tử giãn ra hai bên
        </h2>
        <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
          <div className="bg-red-300 p-2 rounded">A</div>
          <div className="bg-red-300 p-2 rounded">B</div>
          <div className="bg-red-300 p-2 rounded">C</div>
        </div>
      </section>

      {/* Hình 1.5: Giãn đều 2 bên */}
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Hình 1.5 - Các phần tử giãn đều 2 bên
        </h2>
        <div className="flex justify-around bg-gray-100 p-4 rounded-lg">
          <div className="bg-purple-300 p-2 rounded">A</div>
          <div className="bg-purple-300 p-2 rounded">B</div>
          <div className="bg-purple-300 p-2 rounded">C</div>
        </div>
      </section>

      {/* Hình 1.6: Giãn đều nhau */}
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Hình 1.6 - Các phần tử giãn đều nhau
        </h2>
        <div className="flex justify-evenly bg-gray-100 p-4 rounded-lg">
          <div className="bg-pink-300 p-2 rounded">A</div>
          <div className="bg-pink-300 p-2 rounded">B</div>
          <div className="bg-pink-300 p-2 rounded">C</div>
        </div>
      </section>
    </div>
  )
}

export default Pagelayout
