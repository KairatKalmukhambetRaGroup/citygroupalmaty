'use client'

import AdminHeader from "@/components/Admin/AdminHeader"
import Table from "@/components/Admin/Table"

export default function Admin() {
  return (
    <>
    <AdminHeader />
    <main>
        <Table />
    </main>
      {/* <Header openModal={openModal} />
      <main>
        <Main openModal={openModal} />
        <About />
        <Services />
        <Tariffs />
      </main>
      <Footer /> */}
    </>
  )
}
