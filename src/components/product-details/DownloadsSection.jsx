import {
  Download,
  FileText,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

export default function DownloadsSection() {
  const documents = [
    {
      title: "1N4007 Datasheet",
      description:
        "Complete technical specifications and characteristics",
      size: "1.2 MB",
      icon: FileText,
    },
    {
      title: "RoHS Compliance Certificate",
      description:
        "Environmental compliance documentation",
      size: "420 KB",
      icon: ShieldCheck,
    },
    {
      title: "Package Drawing",
      description:
        "DO-41 mechanical dimensions and layout",
      size: "650 KB",
      icon: FileSpreadsheet,
    },
    {
      title: "Product Brief",
      description:
        "Quick overview and application guide",
      size: "850 KB",
      icon: FileText,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Documents & Downloads
          </h2>

          <p className="mt-3 text-gray-600">
            Access datasheets, certificates,
            package drawings and product documents.
          </p>
        </div>

        {/* Download Cards */}

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc) => {
            const Icon = doc.icon;

            return (
              <div
                key={doc.title}
                className="rounded-2xl border bg-white p-6 transition hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                      <Icon
                        size={24}
                        className="text-red-600"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {doc.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        {doc.description}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        File Size: {doc.size}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Datasheet CTA */}

        <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Need More Technical Information?
              </h3>

              <p className="mt-2 text-gray-300">
                Contact our technical team for
                detailed specifications and support.
              </p>
            </div>

            <button className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
              Contact Technical Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}